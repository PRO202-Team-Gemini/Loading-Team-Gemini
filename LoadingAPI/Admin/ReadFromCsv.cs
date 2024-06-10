using CsvHelper;
using LoadingAPI.Admin.ModelMaps;
using LoadingAPI.Models;
using System.Globalization;

namespace LoadingAPI.Admin
{
    public class CsvReaderService
    {
        public List<T> ReadFromCsv<T>(string filePath)
        {
            using StreamReader reader = new(filePath);
            using CsvReader csv = new(reader, CultureInfo.InvariantCulture);

            if (typeof(T) == typeof(AnswerModel))
            {
                csv.Context.RegisterClassMap<AnswerModelMap>();
            } 
            else if (typeof(T) == typeof(QuestionModel))
            {
                csv.Context.RegisterClassMap<QuestionsModelMap>();
            }
            else if (typeof(T) == typeof(CharacterStatModel))
            {
                csv.Context.RegisterClassMap<CharacterStatModelMap>();
            }

            List<T> records = csv.GetRecords<T>().ToList();
            return records;
        }
    }
}