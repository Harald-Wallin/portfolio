export default function ProfileSummary() {
  return (
    <section className="profile-summary">
      <h1>
        Hej! <strong>Harald heter jag.</strong>
      </h1>

      <div className="profile-summary-text">
        <p>
          Jag studerar till Fullstack Developer på Medieinstitutet i Göteborg
          och söker LIA mellan [STARTDATUM] och [SLUTDATUM].
        </p>

        <p>
          Jag gillar inte bara att få kod att fungera – jag vill förstå varför
          den fungerar. Jag dras särskilt till UX, systemdesign och modulär
          arkitektur.
        </p>

        <p>
          Just nu bygger jag bland annat RöK, ett modulärt 2D-RPG i Unity och
          C#, samtidigt som jag utvecklar mina kunskaper inom modern
          fullstack-utveckling.
        </p>
      </div>
    </section>
  );
}