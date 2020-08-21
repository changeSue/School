// 导出到excel
function formatJson (filterVal, jsonData) {
  return jsonData.map(v =>
    filterVal.map(j => {
      if (j === "enddate" || j === "stadate") {
        return this.timestampToTime(v[j]);
      } else {
        return v[j];
      }
    })
  );
}
export function download(filename, tHeader, filterVal, exceldata) {
  filename = filename + timestampToTime(new Date())
  import("./Export2Excel").then(excel => {
    const list = exceldata;
    const data = formatJson(filterVal, list);
    excel.export_json_to_excel({
      header: tHeader,
      data,
      filename: filename,
      autoWidth: true,
      bookType: 'xlsx'
    });
  });
}