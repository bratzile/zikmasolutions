import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { stats } from '../mockData';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Fokus na rezultate',
      description: 'Vaš uspeh je naš uspeh. Svaki projekat radimo sa ciljem da donese merljive rezultate.'
    },
    {
      icon: Users,
      title: 'Partnerski pristup',
      description: 'Ne radimo samo za vas, radimo sa vama. Transparentna komunikacija i saradnja su ključni.'
    },
    {
      icon: Award,
      title: 'Kvalitet pre svega',
      description: 'Nikad ne pravimo kompromis kada je kvalitet u pitanju. Najbolje tehnologije i prakse.'
    },
    {
      icon: Zap,
      title: 'Inovacija',
      description: 'Pratimo najnovije trendove i tehnologije da bismo vaš biznis držali korak ispred konkurencije.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#28A745] font-semibold mb-2 block">O NAMA</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Vaš partner za digitalni uspeh
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Zikma Solutions je digitalna agencija sa sedištem u Nišu, specijalizovana za kreiranje modernih web rešenja
            koja donose realne rezultate.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1a2332]/50 border border-[#28A745]/20 rounded-xl p-6 text-center hover:border-[#28A745] transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#28A745] mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Naša priča</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Zikma Solutions je osnovana 2017. godine, ali koreni naše priče sežu mnogo dalje – u sedam godina intenzivnog freelancinga pre nego što smo napravili sledeći veliki korak. Tokom tog perioda, svaki projekat, bez obzira na veličinu ili kompleksnost, bio je prilika da učimo, istražujemo nove tehnologije i razvijamo pristup koji kombinuje kreativnost, preciznost i strateško razmišljanje.
            </p>
            <p>
              Rad sa različitim klijentima – od malih preduzetnika i startupova do etablovanih kompanija – omogućio nam je da razumemo raznolike izazove poslovanja i potrebe tržišta. Svaki projekat bio je prilika da razvijamo rešenja koja nisu samo funkcionalna, već i merljivo doprinose rastu i uspehu klijenata. Upravo ta iskustva iz freelancinga oblikovala su našu filozofiju: da svaki digitalni proizvod, bez obzira na njegovu veličinu, mora biti pažljivo dizajniran, optimizovan i spreman da donese pravu vrednost.
            </p>
            <p>
              Ideja da svoje iskustvo pretočimo u firmu nastala je prirodno – želeli smo da klijentima ponudimo stabilnost, kontinuitet i pouzdanost, ali i mogućnost razvoja kompleksnijih i inovativnijih rešenja. Tako je nastala Zikma Solutions, agencija posvećena pružanju profesionalnih web, digitalnih i softverskih rešenja koja kombinuju moderni dizajn, naprednu tehnologiju i strateški pristup.
            </p>
            <p>
              Danas, skoro deset godina nakon prvih freelance koraka, naša misija je jasna: stvarati rešenja koja pomažu kompanijama da rastu, unaprede procese i iskoriste sav potencijal digitalnog sveta. Naša filozofija ostaje ista – radimo pažljivo, sa ciljem da svaki projekat bude primer kvaliteta, inovativnosti i konkretnih rezultata.
            </p>
            <p>
              Put od prvog freelance projekta do firme koja danas oblikuje digitalna iskustva nije bio lak, ali je bio ispunjen učenjem, izazovima i uspehom klijenata. I upravo ta posvećenost i strast nas pokreću da stalno pomeramo granice i kreiramo rešenja koja čine razliku.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Naše vrednosti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 hover:transform hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#28A745]/10 to-[#1E7E34]/10 border border-[#28A745]/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Želite da postanete deo naše priče uspeha?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas i započnimo zajedno vaš put ka digitalnoj transformaciji
          </p>
          <Link to="/kontakt">
            <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300">
              Započnimo saradnju
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
