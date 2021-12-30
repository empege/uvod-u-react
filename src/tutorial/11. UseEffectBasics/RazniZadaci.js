/*

1. Napravite jednostavan counter koji ce imati vrednost 0, i 2 buttona - plus i minut. Klikom na dugme menjate vrednost za 1 gore ili dole. Koristeci useEffect logujte vrednost countera u consolu. (vidite kako useEffect prikazuje pravu vrednost, za razliku od toga da console.log uradite tamo gde radite i setCounter). Neka se vrednost loguje samo kada counter nije 0

2. Koristeci useEffect uradite alert() dobrodoslice samo na prvi render

3. U vasem counteru napravite jos jednu state promenljivu, npr. counter2. Napravite button koji samo povecava ovu state promenljivu. Koristeci useEffect uradite console.log samo kada se promeni counter2.

4. Napravite cleanup funkciju u useEffectu koji se pokrece na promenu prvog countera, tako da se u njoj ispise neki string, npr "Resetujem sve i pokrecem moj useEffect"

5. Napravite state promenljivu size, koja ce biti objekat sa 2 propertija: width i height. Po defaultu u njega ubacite width i height ekrana i ispisite to u jsx-u. Na resize nekad se update size i neka se novi width i height automatski ispisu. Resize event nakacite u useEffectu, pazeci da nemate nepotrebno dodavanje event listenera

6. Napravite state promenljivu koja je za pocetak null. Napravite dugme kojim postavljate tu promenljivu da bude niz stringova, npr. ['prvi', 'drugi', 'treci']. Pre klika na dugme neka se prikaze loading... a kada se klikne na dugme i update state, neka se izlistaju vrednosti niza u jsx-u

7. Napravite opet state koji je na pocetku null. Neka se unutar setTimeouta koji se aktivira posle 5 sekundi, state promeni u niz odozgo i zatim prikaze u jsx-u. Pre nego sto se timeout izvrsi neka opet imamo loading. Loading neka bude react icon neki, tako da imamo spinner koji se okrece dok cekamo

8. Napravite formu sa samo jednim input poljem. Input polje neka ima value neke svoje state promenljive, npr: name (sa funkcijom setName).
Napravite ispod toga jedan div zakucanog widtha i heighta koji ce biti zute boje po defaultu, tacnije, bice zute boje sve dok je name prazan string.
Koristeci useEffect posle svake promene state proverite vrednost koju ste ukucali, i ako name ima 1 do 3 karaktera, neka nas div bude crvene boje, a ako ima vise od 3 bude zelene boje.
Probajte da umesto svih if else gore koje ste pisali, stavite u useEffect samo da vam je background to sto ste ukucali (npr. u useEffect samo stavite setBackground(input) i ukucajte red u input, tako da nas div dobije tu boju :))

9. Napravite 2 state promenljive, prva i druga npr, sa pocetnim vrednostima 0. Neka se klikom na dugme prva povecava za jedan, a zatim koristeci useEffect neka se druga smanji za 1. Ispisite obe u jsx-u

10. Dodajte i trecu promenljivu na zadatak iznad i neka se njena vrednost automatski promeni za 5 gore svaki put kad se promeni vrednost druge promenljive

11. Nadjite neki zanimljiv api sa interneta koji vam daje bilo kakav niz podataka. Napravite async await funkciju ili samo fetch tako da povucete te podatke, a zatim ih izlistate na stranici. Pre neko sto podaci stignu, neka se prikazuje nekakav loading screeen

12. Nadjite api koji daje mogucnost da prosledite query parametar i prema njemu dobijete informaciju. Mozete pogledati ovde: https://any-api.com/ Napravite fetch, povucite neke defaultne podatke sa izabranog apija i prikazite ih u jsx-u. Napravite dugme koji ce na klik da setuje novi url sa istog apija, tako da kada se promeni url, automatski ce se pokrenuti i fetch, a onda i izlistati novi podaci (url moze biti state promenljiva, a fetch funkciju pokrenucete u useEffectu. Videcete da ako promenite url koji je state promenljiva, automatski ce vam se pokrenuti i novi fetch kad se komponenta rerenderuje)








*/