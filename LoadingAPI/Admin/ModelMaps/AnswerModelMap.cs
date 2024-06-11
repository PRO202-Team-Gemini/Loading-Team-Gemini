using CsvHelper.Configuration;
using LoadingAPI.Models;
using System.Globalization;

namespace LoadingAPI.Admin.ModelMaps
{
    public class AnswerModelMap : ClassMap<AnswerModel>
    {
        public AnswerModelMap()
        {
            AutoMap(CultureInfo.InvariantCulture);
            Map(m => m.Id).Ignore();
        }
    }
}