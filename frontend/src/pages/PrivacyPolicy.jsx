import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Politika Privatnosti | Zikma Solutions</title>
        <meta name="description" content="Politika privatnosti kompanije Zikma Solutions. Saznajte kako prikupljamo, koristimo i štitimo vaše lične podatke." />
      </Helmet>

      <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Politika Privatnosti</h1>
          <p className="text-gray-400 mb-8">Poslednje ažuriranje: Januar 2025.</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Uvod</h2>
              <p className="text-gray-300 leading-relaxed">
                Zikma Solutions ("mi", "naš" ili "kompanija") posvećena je zaštiti vaše privatnosti. Ova Politika Privatnosti objašnjava kako prikupljamo, koristimo, obrađujemo i štitimo vaše lične podatke kada koristite naš sajt zikmasolutions.rs i naše usluge.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Podaci koje prikupljamo</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Možemo prikupljati sledeće vrste podataka:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Lični podaci:</strong> Ime i prezime, email adresa, broj telefona, adresa</li>
                <li><strong>Podaci o firmi:</strong> Naziv firme, PIB, adresa sedišta</li>
                <li><strong>Tehnički podaci:</strong> IP adresa, tip browser-a, operativni sistem, vreme posete</li>
                <li><strong>Podaci o korišćenju:</strong> Stranice koje posećujete, vreme provedeno na sajtu</li>
                <li><strong>Komunikacija:</strong> Poruke koje nam šaljete putem kontakt forme ili email-a</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Kako koristimo vaše podatke</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Vaše podatke koristimo za:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Pružanje i poboljšanje naših usluga</li>
                <li>Komunikaciju sa vama u vezi projekata i upita</li>
                <li>Slanje ponuda, informacija i newsletter-a (uz vašu saglasnost)</li>
                <li>Analizu i poboljšanje performansi sajta</li>
                <li>Ispunjavanje zakonskih obaveza</li>
                <li>Zaštitu naših prava i sprečavanje zloupotreba</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Kolačići (Cookies)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Naš sajt koristi kolačiće radi poboljšanja korisničkog iskustva. Kolačići su male tekstualne datoteke koje se čuvaju na vašem uređaju. Koristimo:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Neophodni kolačići:</strong> Za funkcionisanje sajta</li>
                <li><strong>Analitički kolačići:</strong> Za praćenje posećenosti (Google Analytics)</li>
                <li><strong>Funkcionalni kolačići:</strong> Za pamćenje vaših preferenci</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Možete kontrolisati i brisati kolačiće putem podešavanja vašeg browser-a.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Deljenje podataka</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vaše podatke ne prodajemo trećim stranama. Podatke možemo deliti samo sa:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Pružaocima usluga koji nam pomažu u poslovanju (hosting, email servisi)</li>
                <li>Državnim organima kada je to zakonski obavezno</li>
                <li>Pravnim savetnicima u slučaju sporova</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Bezbednost podataka</h2>
              <p className="text-gray-300 leading-relaxed">
                Primenjujemo odgovarajuće tehničke i organizacione mere za zaštitu vaših podataka od neovlašćenog pristupa, gubitka ili zloupotrebe. To uključuje SSL enkripciju, sigurne servere i ograničen pristup podacima.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Čuvanje podataka</h2>
              <p className="text-gray-300 leading-relaxed">
                Vaše podatke čuvamo onoliko dugo koliko je potrebno za svrhe za koje su prikupljeni, ili koliko zahtevaju zakonske obaveze. Nakon tog perioda, podaci se bezbedno brišu ili anonimizuju.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Vaša prava</h2>
              <p className="text-gray-300 leading-relaxed mb-4">U skladu sa zakonom, imate pravo da:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Zatražite pristup vašim ličnim podacima</li>
                <li>Zatražite ispravku netačnih podataka</li>
                <li>Zatražite brisanje vaših podataka</li>
                <li>Povučete saglasnost za obradu podataka</li>
                <li>Uložite prigovor na obradu podataka</li>
                <li>Zatražite prenos podataka</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Linkovi ka drugim sajtovima</h2>
              <p className="text-gray-300 leading-relaxed">
                Naš sajt može sadržati linkove ka drugim web sajtovima. Nismo odgovorni za politike privatnosti ili sadržaj tih sajtova. Preporučujemo da pročitate politiku privatnosti svakog sajta koji posetite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Izmene politike</h2>
              <p className="text-gray-300 leading-relaxed">
                Ova Politika Privatnosti može biti ažurirana povremeno. Sve izmene biće objavljene na ovoj stranici sa datumom poslednjeg ažuriranja. Preporučujemo redovnu proveru ove stranice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Kontakt</h2>
              <p className="text-gray-300 leading-relaxed">
                Za sva pitanja u vezi sa ovom Politikom Privatnosti ili obradom vaših podataka, kontaktirajte nas:
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

export default PrivacyPolicy;
