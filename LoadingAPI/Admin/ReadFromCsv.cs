using CsvHelper;
using System.Globalization;

namespace LoadingAPI.Admin
{
    public class CsvReaderService
    {
        public List<T> ReadFromCsv<T>(string filePath)
        {
            using StreamReader reader = new(filePath);
            using CsvReader csv = new(reader, CultureInfo.InvariantCulture);
            List<T> records = csv.GetRecords<T>().ToList();
            return records;
        }
    }
}