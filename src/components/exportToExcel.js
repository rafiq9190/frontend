import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const ExportToExcel = ({ apiData, fileName }) => {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (apiData, fileName) => {
       
        const ws = XLSX.utils.json_to_sheet(apiData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (

        <button type="button" className={`btn btn-large position-relative pb-0`} onClick={(e) => exportToCSV(apiData, fileName)}>
            <i className="icon icon-large icon-download icon-base-bg fs-3"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill base-background">
                {apiData.length}
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>


    );
};