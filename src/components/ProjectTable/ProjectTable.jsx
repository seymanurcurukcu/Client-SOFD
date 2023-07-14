import { Card,Table } from "react-bootstrap";
import user1 from "../../../public/izmir-token-yenigun.jpg";
import user2 from "../../../public/izmir-token-yenigun.jpg";
import user3 from "../../../public/izmir-token-yenigun.jpg";
import user4 from "../../../public/izmir-token-yenigun.jpg";
import user5 from "../../../public/izmir-token-yenigun.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Haber xxx",
    email: "detay detay detay",
    project: "02 Şubat 2022",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Haber xxx",
    email: "detay detay detay",
    project: "02 Şubat 2022",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Haber xxx",
    email: "detay detay detay",
    project: "02 Şubat 2022",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Haber xxx",
    email: "detay detay detay",
    project: "02 Şubat 2022",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Haber xxx",
    email: "detay detay detay",
    project: "02 Şubat 2022",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title as="h5">Haberler</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" as="h6">
            Gündem hakkındaki yeni gelişmeler
          </Card.Subtitle>

          <Table className="no-wrap mt-3 align-middle"  >
            <thead>
              <tr>
                <th>Başlıklar</th>
                <th>Tarih</th>

                <th>Link</th>

              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        alt="avatar"
                        width="75"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  

                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectTables;
