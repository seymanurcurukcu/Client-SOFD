import React, { useState, useEffect } from 'react';
import './graphcontent.css'
import {CanvasJSChart} from 'canvasjs-react-charts'
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Container, Row,Col } from 'react-bootstrap';
import Chart from "react-apexcharts";
const Graphcontent = ({type}) => {

  const WS_ADDRESS = 'wss://socket.paratic.com/v2/?EIO=4&transport=websocket';
  const WS_USD_TRY_MESSAGE = '42["joinStream", {"codes": ["USD/TRL"]}]';
  const WS_EUR_TRY_MESSAGE = '42["joinStream", {"codes": ["EUR/TRL"]}]';
  const [spotPariteler, setSpotPariteler] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(WS_ADDRESS);

    ws.onopen = () => {
      ws.send('40');
      ws.send(WS_USD_TRY_MESSAGE);
      ws.send(WS_EUR_TRY_MESSAGE);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data.substring(event.data.indexOf('[')));

      if (data[0] === 'spot_pariteler') {
        const spotData = JSON.parse(data[1].replace(/\\/g, ''));
        const [name, priceData] = Object.entries(spotData)[0];
        const [sellPrice, buyPrice] = priceData.split('|').slice(0, 2);

        if (sellPrice !== '' && buyPrice !== '') {
          setSpotPariteler(prevSpotPariteler => {
            const existingItem = prevSpotPariteler.find(item => item.name === name);

            if (existingItem) {
              return prevSpotPariteler.map(item => {
                if (item.name === name) {
                  return { ...item, sellPrice, buyPrice, show: true };
                }
                return item;
              });
            } else {
              return [...prevSpotPariteler, { name, sellPrice, buyPrice, show: true }];
            }
          });
        }
      }

      ws.send('3');
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSpotPariteler(prevSpotPariteler => {
        const updatedPariteler = prevSpotPariteler.map(item => {
          return { ...item, show: false };
        });

        return updatedPariteler;
      });
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [spotPariteler]);
  console.log(spotPariteler,"data")
    const chartoptions = {
        series: [{
            name: 'Dolar',
           
            data: [{x:"Sun Jan15 2017",y:150000000},
                {x:"Mon Jan 16 2017",y:160379978},
                {x:"Tue Jan 17 2017",y:170493749},
                {x:"Wed Jan 18 2017",y:160785250},
                {x:"Thu Jan 19 2017",y:167391904},
                {x:"Fri Jan 20 2017",y:161576838},
                {x:"Sat Jan 21 2017",y:161413854},
                {x:"Sun Jan 22 2017",y:152177211},
            ]
                    
          }],
          options: {
            chart: {
              type: 'area',
              stacked: false,
              height: 350,
              zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
              },
              toolbar: {
                autoSelected: 'zoom'
              }
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,
            },
            
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
              },
            },
            yaxis: {
              labels: {
                formatter: function (val) {
                  return (val / 1000000).toFixed(0);
                },
              },
            
            },
            xaxis: {
              type: 'datetime',
            },
            tooltip: {
              shared: false,
              y: {
                formatter: function (val) {
                  return (val / 1000000).toFixed(0)
                }
              }
            }
          },
        
        
        };
      
    
  
    return (
        
    
       <div className='container_charts'>

        <Card>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
       </div>
      
    )
}

export default Graphcontent