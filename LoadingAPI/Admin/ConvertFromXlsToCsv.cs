using Spire.Xls;
using System.Text;

namespace LoadingAPI.Admin
{
    public class ConvertFromXlsToCsv
    {
        public void Convert(string xlsFileName, string csvFileName)
        {
            string xlsLoadPath = Path.Combine(Environment.CurrentDirectory, @"Admin\Datafiles", xlsFileName);
            string csvSavePath = Path.Combine(Environment.CurrentDirectory, @"Admin\Datafiles", csvFileName);

            Workbook workbook = new ();
            workbook.LoadFromFile(xlsLoadPath);

            Worksheet sheet = workbook.Worksheets[0];
            sheet.SaveToFile(csvSavePath, ",", Encoding.UTF8);
        }
    }
}
