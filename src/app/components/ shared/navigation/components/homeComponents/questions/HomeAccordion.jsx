"use client";
import React, { useState } from "react";
import homeAccordionData from "@/app/data/HomeAccordion";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";

const HomeAccordion = () => {
  const [expanded, setExpanded] = useState(3); // 3NumbarTaDefaultKhola

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : null);
  };

  // downIconOrSvg
  const DownIcon = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 14C28 6.28053 21.7195 2.74531e-07 14 6.11959e-07C6.28053 9.49388e-07 2.74531e-07 6.28053 6.11959e-07 14C9.49388e-07 21.7195 6.28053 28 14 28C21.7195 28 28 21.7195 28 14ZM1.75 14C1.75 7.24522 7.24522 1.75 14 1.75C20.7548 1.75 26.25 7.24522 26.25 14C26.25 20.7548 20.7548 26.25 14 26.25C7.24522 26.25 1.75 20.7548 1.75 14ZM14.6186 19.8686C14.2767 20.2105 13.7231 20.2105 13.3814 19.8686L9.00638 15.4936C8.83553 15.3228 8.75 15.0988 8.75 14.875C8.75 14.6512 8.83553 14.4272 9.00637 14.2564C9.34828 13.9145 9.90194 13.9145 10.2436 14.2564L13.125 17.1378L13.125 8.75C13.125 8.26678 13.5163 7.875 14 7.875C14.4837 7.875 14.875 8.26678 14.875 8.75L14.875 17.1378L17.7564 14.2564C18.0983 13.9145 18.6519 13.9145 18.9936 14.2564C19.3353 14.5983 19.3355 15.1519 18.9936 15.4936L14.6186 19.8686Z"
        fill="#155DFC"
      />
    </svg>
  );

  // openIconOrSvg
  const UpIcon = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 14C28 21.7195 21.7195 28 14 28C6.28053 28 2.74531e-07 21.7195 6.11959e-07 14C9.49388e-07 6.28053 6.28053 -9.49388e-07 14 -6.11959e-07C21.7195 -2.74531e-07 28 6.28053 28 14ZM1.75 14C1.75 20.7548 7.24522 26.25 14 26.25C20.7548 26.25 26.25 20.7548 26.25 14C26.25 7.24522 20.7548 1.75 14 1.75C7.24522 1.75 1.75 7.24522 1.75 14ZM14.6186 8.13137C14.2767 7.78947 13.7231 7.78947 13.3814 8.13137L9.00638 12.5064C8.83553 12.6772 8.75 12.9012 8.75 13.125C8.75 13.3488 8.83553 13.5728 9.00637 13.7436C9.34828 14.0855 9.90194 14.0855 10.2436 13.7436L13.125 10.8622L13.125 19.25C13.125 19.7332 13.5163 20.125 14 20.125C14.4837 20.125 14.875 19.7332 14.875 19.25L14.875 10.8622L17.7564 13.7436C18.0983 14.0855 18.6519 14.0855 18.9936 13.7436C19.3353 13.4017 19.3355 12.8481 18.9936 12.5064L14.6186 8.13137Z"
        fill="#155DFC"
      />
    </svg>
  );

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1129,
        minHeight: 582,
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        opacity: 1,
      }}
    >
      {homeAccordionData.map((item) => {
        const isOpen = expanded === item.id;

        return (
          <Accordion
            key={item.id}
            expanded={isOpen}
            onChange={handleChange(item.id)}
            disableGutters
            elevation={0} // ডিফল্ট শ্যাডো রিমুভ
            sx={{
              borderRadius: "20px !important", // ফিগমা অনুযায়ী রাউন্ডেড কোণা
              border: "1px solid #EAF2FF", // ডিফল্ট বর্ডার
              backgroundColor: isOpen ? "#E8EFFF" : "transparent", // সিলেক্টেড হলে কালার চেঞ্জ
              transition: "all 0.3s ease",
              "&::before": { display: "none" }, // MUI এর ডিফল্ট ডিভাইডার রিমুভ
              mb: 2, // আইটেম গুলোর মাঝে গ্যাপ
            }}
          >
            <AccordionSummary
              // কন্ডিশনাল আইকন লজিক
              expandIcon={isOpen ? <UpIcon /> : <DownIcon />}
              sx={{
                padding: "16px 32px",
                "& .MuiAccordionSummary-expandIconWrapper": {
                  transition: "none", // রোটেশন অফ করে আমরা আমাদের SVG চেঞ্জ করছি
                  "&.Mui-expanded": { transform: "none" },
                },
              }}
            >
              <Typography className="font-poppins font-medium text-[20px] text-dark-blue-color">
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: "0 32px 32px 32px" }}>
              <Typography className="font-hind font-normal text-[16px] text-dark-blue-color">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default HomeAccordion;
