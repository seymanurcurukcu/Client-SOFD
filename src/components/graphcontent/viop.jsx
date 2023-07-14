import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import ApexCharts from 'apexcharts';
import './viop.css'
const ViopMessage = () => {
  const WS_ADDRESS = 'wss://socket.paratic.com/v2/?EIO=4&transport=websocket';
  const WS_SASA_MESSAGE = '42["joinStream", {"codes": ["SASA"]}]';
  const WS_KOZAL_MESSAGE = '42["joinStream", {"codes": ["KOZAL"]}]';
  const WS_GUBRF_MESSAGE = '42["joinStream", {"codes": ["GUBRF"]}]';
  const WS_EKGYO_MESSAGE = '42["joinStream", {"codes": ["EKGYO"]}]';
  const WS_THYAO_MESSAGE = '42["joinStream", {"codes": ["THYAO"]}]';
  const WS_VESBE_MESSAGE = '42["joinStream", {"codes": ["VESBE"]}]';
  const WS_SISE_MESSAGE = '42["joinStream", {"codes": ["SISE"]}]';
  const WS_HALKB_MESSAGE = '42["joinStream", {"codes": ["HALKB"]}]';
  const WS_YKBNK_MESSAGE = '42["joinStream", {"codes": ["YKBNK"]}]';
  const WS_AKBNK_MESSAGE = '42["joinStream", {"codes": ["AKBNK"]}]';

  const [spotPariteler, setSpotPariteler] = useState({
    'SASA': { buyPrices: [], sellPrices: [] },
    'KOZAL': { buyPrices: [], sellPrices: [] },
    'GUBRF': { buyPrices: [], sellPrices: [] },
    'EKGYO': { buyPrices: [], sellPrices: [] },
    'THYAO': { buyPrices: [], sellPrices: [] },
    'VESBE': { buyPrices: [], sellPrices: [] },
    'SISE': { buyPrices: [], sellPrices: [] },
    'HALKB': { buyPrices: [], sellPrices: [] },
    'YKBNK': { buyPrices: [], sellPrices: [] },
    'AKBNK': { buyPrices: [], sellPrices: [] },
  });
  const [selectedCurrency, setSelectedCurrency] = useState('SASA');
  const [chart, setChart] = useState(null);
  const [priceChange, setPriceChange] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(WS_ADDRESS);

    ws.onopen = () => {
      ws.send('40');
      ws.send(WS_SASA_MESSAGE);
      ws.send(WS_KOZAL_MESSAGE);
      ws.send(WS_GUBRF_MESSAGE);
      ws.send(WS_EKGYO_MESSAGE);
      ws.send(WS_THYAO_MESSAGE);
      ws.send(WS_VESBE_MESSAGE);
      ws.send(WS_SISE_MESSAGE);
      ws.send(WS_HALKB_MESSAGE);
      ws.send(WS_YKBNK_MESSAGE);
      ws.send(WS_AKBNK_MESSAGE);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data.substring(event.data.indexOf('[')));

      if (data[0] === 'hisse_senetleri') {
        const spotData = JSON.parse(data[1].replace(/\\/g, ''));
        const [name, priceData] = Object.entries(spotData)[0];
        const [sellPrice, buyPrice] = priceData.split('|').slice(0, 2);

        if (sellPrice !== '' && buyPrice !== '') {
          setSpotPariteler((prevSpotPariteler) => {
            const prevBuyPrices = prevSpotPariteler[name].buyPrices;
            const prevSellPrices = prevSpotPariteler[name].sellPrices;

            const updatedSpotPariteler = {
              ...prevSpotPariteler,
              [name]: {
                buyPrices: [...prevBuyPrices.slice(-4), parseFloat(buyPrice)],
                sellPrices: [...prevSellPrices.slice(-4), parseFloat(sellPrice)],
              },
            };

            if (
              (prevBuyPrices.length > 0 && parseFloat(buyPrice) > prevBuyPrices[prevBuyPrices.length - 1]) ||
              (prevSellPrices.length > 0 && parseFloat(sellPrice) > prevSellPrices[prevSellPrices.length - 1])
            ) {
              setPriceChange(true);
              setTimeout(() => setPriceChange(false), 500);
            }

            return updatedSpotPariteler;
          });
        }
      }

      ws.send('3');
    };

    return () => {
      // ws.close();
    };
  }, []);

  const handleCurrencyClick = (currency) => {
    setSelectedCurrency(currency);
  };
  const getPriceChangeIndicator = (prices, direction) => {
    if (prices.length < 2) {
      return null;
    }

    const currentPrice = prices[prices.length - 1];
    const previousPrice = prices[prices.length - 2];

    if (currentPrice > previousPrice && direction === 'up') {
      return <span className="arrow up">&#8593;</span>;
    } else if (currentPrice < previousPrice && direction === 'down') {
      return <span className="arrow down">&#8595;</span>;
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (selectedCurrency) {
      const chartData = {
        series: [
          { name: 'Alış Fiyatı', data: spotPariteler[selectedCurrency].buyPrices },
          { name: 'Satış Fiyatı', data: spotPariteler[selectedCurrency].sellPrices },
        ],
        xaxis: {
          categories: spotPariteler[selectedCurrency].buyPrices.map((_, index) => index + 1),
        },
      };

      const options = {
        chart: {
          type: 'area',
          height: 390,
        },
        series: chartData.series,
        xaxis: chartData.xaxis,
        yaxis: {
          labels: {
            formatter: function (value) {
              return value.toFixed(2);
            },
          },
        },
        title: {
          text: `Parite: ${selectedCurrency}`,
          align: 'center',
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          },
        },
        colors: ['#2ecc71', '#e74c3c'], // Alış yeşil, Satış kırmızı renkte
      };

      if (chart) {
        chart.updateSeries(chartData.series);
        chart.updateOptions(options);
      } else {
        const chartElement = document.getElementById('chart');

        if (chartElement) {
          const newChart = new ApexCharts(chartElement, options);
          newChart.render();
          setChart(newChart);
        }
      }
    }
  }, [selectedCurrency, spotPariteler]);

  useEffect(() => {
    let interval;

    if (selectedCurrency) {
      interval = setInterval(() => {
        ws.send('3');
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [selectedCurrency]);

  return (
    <div>
      <div className='doviz-buttons'>
        <Button onClick={() => handleCurrencyClick('SASA')} className='title-doviz'>SASA</Button>
        {' '}       
        <Button onClick={() => handleCurrencyClick('KOZAL')} className='title-doviz'>KOZAL</Button>
        {'     '}
        <Button onClick={() => handleCurrencyClick('GUBRF')} className='title-doviz'>GUBRF</Button>
        {'     '}
        <Button onClick={() => handleCurrencyClick('EKGYO')} className='title-doviz'>EKGYO</Button>
        {'     '}

        <Button onClick={() => handleCurrencyClick('THYAO')} className='title-doviz'>THYAO</Button>
        {'     '}

        <Button onClick={() => handleCurrencyClick('VESBE')} className='title-doviz'>VESBE</Button>
        {'     '}

        <Button onClick={() => handleCurrencyClick('SISE')} className='title-doviz'>SISE</Button>
        {'     '}

        <Button onClick={() => handleCurrencyClick('HALKB')} className='title-doviz'>HALKB</Button>
        {'     '}

        <Button onClick={() => handleCurrencyClick('YKBNK')} className='title-doviz'>YKBNK</Button>
        {'     '}

        <Button onClick={() => handleCurrencyClick('AKBNK')} className='title-doviz'>AKBNK</Button>

      </div>

      {/* <div className="spot-list">
        {Object.entries(spotPariteler).map(([name, item]) => (
          <div className="item" key={name}>
            <p>{name}</p>
            <p>
                Alış: <span className={`buy-price ${priceChange ? 'price-change' : ''} ${item.buyPrices.length > 1 && item.buyPrices[item.buyPrices.length - 1] > item.buyPrices[item.buyPrices.length - 2] ? 'price-increase' : 'price-decrease'}`}>{item.buyPrices[item.buyPrices.length - 1]}</span> <br />
               Satış: <span className={`sell-price ${priceChange ? 'price-change' : ''} ${item.sellPrices.length > 1 && item.sellPrices[item.sellPrices.length - 1] > item.sellPrices[item.sellPrices.length - 2] ? 'price-increase' : 'price-decrease'}`}>{item.sellPrices[item.sellPrices.length - 1]}</span>
            </p>
          </div>
        ))}
      </div> */}
      <div className="spot-list">
      {Object.entries(spotPariteler).map(([name, item]) => (
  <div className="item" key={name}>
    <p className='item-p'>{name}</p>
    <p>
      Alış:{" "}
      <span
        className={`buy-price ${
          priceChange ? "price-change" : ""
        } ${
          item.buyPrices.length > 1 &&
          item.buyPrices[item.buyPrices.length - 1] >
            item.buyPrices[item.buyPrices.length - 2]
            ? "price-increase"
            : "price-decrease"
        }`}
      >
        {item.buyPrices[item.buyPrices.length - 1]}
        {item.buyPrices.length > 1 &&
          item.buyPrices[item.buyPrices.length - 1] >
            item.buyPrices[item.buyPrices.length - 2] && (
            <i className="bi bi-arrow-up-short"></i>
          )}
        {item.buyPrices.length > 1 &&
          item.buyPrices[item.buyPrices.length - 1] <
            item.buyPrices[item.buyPrices.length - 2] && (
            <i className="bi bi-arrow-down-short"></i>
          )}
      </span>{" "}
      <br />
      Satış:{" "}
      <span
        className={`sell-price ${
          priceChange ? "price-change" : ""
        } ${
          item.sellPrices.length > 1 &&
          item.sellPrices[item.sellPrices.length - 1] >
            item.sellPrices[item.sellPrices.length - 2]
            ? "price-increase"
            : "price-decrease"
        }`}
      >
        {item.sellPrices[item.sellPrices.length - 1]}
        {item.sellPrices.length > 1 &&
          item.sellPrices[item.sellPrices.length - 1] >
            item.sellPrices[item.sellPrices.length - 2] && (
            <i className="bi bi-arrow-up-short"></i>
          )}
        {item.sellPrices.length > 1 &&
          item.sellPrices[item.sellPrices.length - 1] <
            item.sellPrices[item.sellPrices.length - 2] && (
            <i className="bi bi-arrow-down-short"></i>
          )}
      </span>
    </p>
  </div>
))}

</div>

      <div className="container_charts">
        {selectedCurrency && (
          <Card>
            <CardBody>
              <CardTitle tag="h5"></CardTitle>
              <CardSubtitle className="text-muted" tag="h6">
                
              </CardSubtitle>
              <div id="chart"></div>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ViopMessage;
