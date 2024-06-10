namespace LoadingAPI.Models 
{
	public class CharacterStatModel 
	{
		public int? Id { get; set; } = null;
		public string Name { get; set; }
		public int Level { get; set; }
		public int Attack { get; set; }
		public int Strength { get; set; }
		public int Health {	get; set; }
		public int Expirience { get; set; }
	}
}
