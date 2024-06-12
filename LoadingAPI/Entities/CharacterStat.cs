using LoadingAPI.Interfaces;

namespace LoadingAPI.Entities 
{
	public class CharacterStat 
	{
		public int Id {	get; set; }
		public string? Name { get; set; }
		public int Level { get; set; }
		public int Attack { get; set; }
		public int Strength { get; set; }
		public int Health {	get; set; }
		public int Expirience { get; set; }
	}
}
