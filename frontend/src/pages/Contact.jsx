import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Poruka uspešno poslata!',
          description: 'Kontaktiraćemo vas u najkraćem mogućem roku.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Greška prilikom slanja',
        description: 'Molimo pokušajte ponovo ili nas kontaktirajte telefonom.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#28A745] font-semibold mb-2 block">KONTAKT</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Započnimo vaš projekat
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Imate pitanje ili želite da pokrenete projekat? Kontaktirajte nas i dobijte besplatnu konsultaciju!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#1a2332]/50 border-[#28A745]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Pošaljite nam poruku</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white mb-2 block">Ime i prezime *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Vaše ime i prezime"
                        className="bg-[#0f1419] border-[#28A745]/20 text-white placeholder-gray-500 focus:border-[#28A745]"
                      />
                    </div>
                    <div>
                      <label className="text-white mb-2 block">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="vas@email.com"
                        className="bg-[#0f1419] border-[#28A745]/20 text-white placeholder-gray-500 focus:border-[#28A745]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white mb-2 block">Telefon</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="069 123 4567"
                        className="bg-[#0f1419] border-[#28A745]/20 text-white placeholder-gray-500 focus:border-[#28A745]"
                      />
                    </div>
                    <div>
                      <label className="text-white mb-2 block">Usluga</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-[#0f1419] border border-[#28A745]/20 text-white rounded-md focus:border-[#28A745] focus:outline-none"
                      >
                        <option value="">Izaberite uslugu</option>
                        <option value="web-development">Izrada Web Sajtova</option>
                        <option value="wordpress">WordPress Development</option>
                        <option value="ecommerce">WooCommerce/PrestaShop</option>
                        <option value="web-apps">Web Aplikacije</option>
                        <option value="seo">SEO Optimizacija</option>
                        <option value="hosting">Hosting i Održavanje</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-white mb-2 block">Poruka *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Opišite svoj projekat ili postavite pitanje..."
                      rows={6}
                      className="bg-[#0f1419] border-[#28A745]/20 text-white placeholder-gray-500 focus:border-[#28A745]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-[#28A745] hover:bg-[#1E7E34] text-white py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      'Slanje...'
                    ) : (
                      <>
                        Pošalji poruku
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Telefon</h3>
                    <p className="text-gray-400">069 23 31 641</p>
                    <p className="text-gray-400 text-sm mt-1">Pon - Pet, 09:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-gray-400">office@zikmasolutions.rs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Lokacija</h3>
                    <p className="text-gray-400">Obrenovićeva 10</p>
                    <p className="text-gray-400 text-sm mt-1">18000 Niš, Srbija</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-gradient-to-br from-[#28A745] to-[#1E7E34] border-0">
              <CardContent className="p-6">
                <h3 className="text-white font-bold text-xl mb-4">Zašto Zikma Solutions?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-white flex-shrink-0 mt-1" size={18} />
                    <span className="text-white text-sm">10+ godina iskustva</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-white flex-shrink-0 mt-1" size={18} />
                    <span className="text-white text-sm">200+ uspešnih projekata</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-white flex-shrink-0 mt-1" size={18} />
                    <span className="text-white text-sm">Besplatna konsultacija</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-white flex-shrink-0 mt-1" size={18} />
                    <span className="text-white text-sm">Garantovana podrška</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-white flex-shrink-0 mt-1" size={18} />
                    <span className="text-white text-sm">Transparentne cene</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
