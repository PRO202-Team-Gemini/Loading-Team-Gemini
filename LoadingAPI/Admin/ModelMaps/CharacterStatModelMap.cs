using CsvHelper.Configuration;
using LoadingAPI.Models;
using System.Globalization;

namespace LoadingAPI.Admin.ModelMaps
{
    public class CharacterStatModelMap : ClassMap<CharacterStatModel>
    {
        public CharacterStatModelMap()
        {
            AutoMap(CultureInfo.InvariantCulture);
            Map(c => c.Id).Ignore();
        }
    }
}
