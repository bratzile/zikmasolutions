import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Uslovi Korišćenja | Zikma Solutions</title>
        <meta name="description" content="Uslovi korišćenja usluga kompanije Zikma Solutions. Pročitajte uslove koji se primenjuju na korišćenje naših usluga." />
      </Helmet>

      <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Uslovi Korišćenja</h1>
          <p className="text-gray-400 mb-8">Poslednje ažuriranje: Januar 2025.</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Opšte odredbe</h2>
              <p className="text-gray-300 leading-relaxed">
                Ovi Uslovi Korišćenja ("Uslovi") regulišu korišćenje web sajta zikmasolutions.rs i usluga koje pruža Zikma Solutions ("mi", "naš" ili "kompanija"). Korišćenjem našeg sajta i usluga, prihvatate ove Uslove u celosti. Ukoliko se ne slažete sa bilo kojim delom ovih Uslova, molimo vas da ne koristite naš sajt i usluge.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Opis usluga</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Zikma Solutions pruža sledeće usluge:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Izrada i dizajn web sajtova</li>
                <li>Razvoj web aplikacija i softverskih rešenja</li>
                <li>E-commerce rešenja (WooCommerce, PrestaShop)</li>
                <li>SEO optimizacija i digitalni marketing</li>
                <li>Održavanje i tehnička podrška</li>
                <li>Hosting i domen usluge</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Korišćenje sajta</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Korišćenjem našeg sajta, saglasni ste da:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Nećete koristiti sajt za nezakonite svrhe</li>
                <li>Nećete pokušavati da pristupite zaštićenim delovima sajta</li>
                <li>Nećete ometati normalan rad sajta</li>
                <li>Nećete prikupljati podatke drugih korisnika bez dozvole</li>
                <li>Ćete pružiti tačne informacije prilikom kontakta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Ugovaranje usluga</h2>
              <p className="text-gray-300 leading-relaxed">
                Konkretni uslovi za svaki projekat definišu se posebnim ugovorom ili ponudom. Ugovor stupa na snagu nakon potpisivanja obe strane ili prihvatanja ponude u pisanoj formi (uključujući email). Cene i rokovi navedeni u ponudi važe 30 dana od datuma izdavanja, osim ako nije drugačije naznačeno.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Plaćanje</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Uslovi plaćanja:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Avans od 30-50% plaća se pre početka rada na projektu</li>
                <li>Ostatak se plaća po završetku projekta, pre puštanja u produkciju</li>
                <li>Za veće projekte, plaćanje može biti u više rata prema dogovoru</li>
                <li>Valuta plaćanja je RSD (dinari) ili EUR prema dogovoru</li>
                <li>Kašnjenje u plaćanju može rezultirati pauziranjem rada ili naplatom zatezne kamate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Intelektualna svojina</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Svi sadržaji na sajtu zikmasolutions.rs (tekstovi, slike, logotipi, kod) su vlasništvo Zikma Solutions i zaštićeni su autorskim pravima. Za projekte koje radimo za klijente:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Prenos prava intelektualne svojine vrši se nakon potpune isplate</li>
                <li>Zadržavamo pravo da prikažemo projekat u našem portfoliju</li>
                <li>Licencirani softver treće strane podleže uslovima tog softvera</li>
                <li>Klijent je odgovoran za sadržaj koji nam dostavlja</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Garancije i podrška</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Za završene projekte pružamo:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Garanciju na ispravnost koda 30 dana od lansiranja</li>
                <li>Besplatnu ispravku bagova nastalih našom greškom</li>
                <li>Tehničku podršku prema ugovorenoj ponudi</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Garancija ne pokriva probleme nastale izmenom koda od strane klijenta ili treće strane, problemima sa hostingom, ili zahtevima za nove funkcionalnosti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Ograničenje odgovornosti</h2>
              <p className="text-gray-300 leading-relaxed">
                Zikma Solutions neće biti odgovoran za: indirektne, posledične ili kaznene štete; gubitak profita, podataka ili poslovne prilike; štete nastale usled više sile ili okolnosti van naše kontrole. Naša maksimalna odgovornost ograničena je na iznos koji je klijent platio za konkretnu uslugu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Raskid ugovora</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ugovor se može raskinuti:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Sporazumom obe strane</li>
                <li>Jednostrano, uz pisano obaveštenje 30 dana unapred</li>
                <li>Odmah, u slučaju materijalne povrede uslova od strane druge strane</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                U slučaju raskida, klijent plaća za obavljeni rad do momenta raskida. Avans se ne vraća osim ako nije drugačije dogovoreno.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Poverljivost</h2>
              <p className="text-gray-300 leading-relaxed">
                Obe strane se obavezuju da neće otkrivati poverljive informacije dobijene tokom saradnje trećim stranama bez prethodne pisane saglasnosti. Ova obaveza ostaje na snazi i nakon završetka saradnje.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Izmene uslova</h2>
              <p className="text-gray-300 leading-relaxed">
                Zadržavamo pravo da izmenimo ove Uslove u bilo kom trenutku. Izmene stupaju na snagu objavljivanjem na sajtu. Za postojeće ugovore, primenjuju se Uslovi važeći u trenutku potpisivanja ugovora.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Merodavno pravo i sporovi</h2>
              <p className="text-gray-300 leading-relaxed">
                Na ove Uslove primenjuje se pravo Republike Srbije. U slučaju spora, strane će pokušati da spor reše mirnim putem. Ukoliko to nije moguće, nadležan je sud u Nišu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Kontakt</h2>
              <p className="text-gray-300 leading-relaxed">
                Za sva pitanja u vezi sa ovim Uslovima Korišćenja, kontaktirajte nas:
              </p>
              <div className="mt-4 p-6 bg-[#1a2332]/50 rounded-xl border border-[#28A745]/20">
                <p className="text-gray-300"><strong>Zikma Solutions</strong></p>
                <p className="text-gray-300">Obrenovićeva 10, 18000 Niš, Srbija</p>
                <p className="text-gray-300">Email: office@zikmasolutions.rs</p>
                <p className="text-gray-300">Telefon: 069 23 31 641</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-[#28A745]/20">
            <Link to="/" className="text-[#28A745] hover:text-[#34D058] transition-colors">
              ← Nazad na početnu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
