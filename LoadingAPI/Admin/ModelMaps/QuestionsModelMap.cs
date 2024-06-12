using CsvHelper.Configuration;
using LoadingAPI.Models;
using System.Globalization;

namespace LoadingAPI.Admin.ModelMaps
{
    public class QuestionsModelMap : ClassMap<QuestionModel>
    {
        public QuestionsModelMap()
        {
            AutoMap(CultureInfo.InvariantCulture);
            Map(q => q.Id).Ignore();
        }
    }
}
