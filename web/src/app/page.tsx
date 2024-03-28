"use client";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

import MainChart from "./Mainchart";
const progressExample = [
  // { title: "Visits", value: "29.703 Users", percent: 40, color: "success" },
  // { title: "Unique", value: "24.093 Users", percent: 20, color: "info" },
  // { title: "Pageviews", value: "78.706 Views", percent: 60, color: "warning" },
  // { title: "New Users", value: "22.123 Users", percent: 80, color: "danger" },
  // {
  //   title: "Bounce Rate",
  //   value: "Average Rate",
  //   percent: 40.15,
  //   color: "primary",
  // },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <CCard className="mb-4 grid grid-cols-2 gap-4">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Traffic
                </h4>
                <div className="small text-body-secondary">
                  January - July 2023
                </div>
              </CCol>
            </CRow>
            <MainChart />
          </CCardBody>

          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Test
                </h4>
                <div className="small text-body-secondary">
                  something - something 2023
                </div>
              </CCol>
            </CRow>
            <MainChart />
          </CCardBody>
        </CCard>
      </div>
    </main>
  );
}
