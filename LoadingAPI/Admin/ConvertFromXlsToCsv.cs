using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System.Text;

namespace LoadingAPI.Admin
{
    public class ConvertFromXlsToCsv
    {
        public void Convert(string xlsFileName, string csvFileName)
        {
            string xlsLoadPath = Path.Combine(Environment.CurrentDirectory, @"Admin\Datafiles", xlsFileName);
            string csvSavePath = Path.Combine(Environment.CurrentDirectory, @"Admin\Datafiles", csvFileName);

            IWorkbook workbook;
            using (FileStream file = new FileStream(xlsLoadPath, FileMode.Open, FileAccess.Read))
            {
                workbook = new XSSFWorkbook(file);
            }

            ISheet sheet = workbook.GetSheetAt(0);
            StringBuilder csvData = new();

            for (int i = 0; i <= sheet.LastRowNum; i++)
            {
                IRow row = sheet.GetRow(i);
                for (int j = 0; j < row.LastCellNum; j++)
                {
                    csvData.Append(row.GetCell(j));
                    if (j < row.LastCellNum - 1)
                    {
                        csvData.Append(",");
                    }
                }
                csvData.Append("\n");
            }

            File.WriteAllText(csvSavePath, csvData.ToString(), Encoding.UTF8);
        }
    }
}