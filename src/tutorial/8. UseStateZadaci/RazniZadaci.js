/*

1.  BROJ - Napravite state promenljivu "kliknuto" i neka se ona prikazuje u h3 elementu na stranici.
Napravite button ispod i neka se klikom na button svaki put update broj koliko smo puta kliknuli (svaki put kad se klikne, promenljiva se poveca za jedan).

2.  STRING - Napravite state promenljivu koja ce kao vrednost imati string (npr: 'STRING TRUE' :P) i neka klikom na dugme togglujete da pise nesto drugo (npr: 'STRING FALSE').

setString((prevString) => {
  if (prevString === 'TRUE'){
    return 'FALSE'
  } else {...}
})

<h1>{nasBool}</h1>

setString('FALSE')

3.  BOOLEAN - Napravite state promenljivu koja je false. Klikom na dugme neka se toggluje njena vrednost i ako je vrednost true ispisuje jedan string, a ako je false drugi (mozete da iskoristite logicke operatore ovde, npr: &&).

<p>{ isText ? 'true' : 'false' }</p>

4.  Napravite button koji ce na klik da pozove sve setState koje ste gore napravili. Da se u isto vreme incrementuje "kliknuto", toggluje bolean i toggluje string.

5.  Zamenite sve funkcije iz 1, 2 i 3 tako da ne daju vrednost direktno, nego kroz anonimnu funkciju u kojoj imamo i predjasnju vrednost state (npr: prevState ili prevValue ili prev. Mozete ovo da vidite u Counter komponenti kod incrementa, samo bez setTimeout-a).

6.  OBJEKAT - Napravite objekat koji ima sve gore navedene propertije, npr: { kliknuto: 0, str: 'STRING TRUE, mojBool: false } i neka to bude defaultna vrednost nove state promenjljive. Klikom na dugme uradite sve isto kao u 1, 2, 3 ali promenom ovog jednog objekta.

setObj({...obj, mojBool: !mojBool})

7.  Napravite komponentu modal (u istom ili drugom fajlu) koja po defaultu nije prikazana na ekranu. Klikom na dugme neka se prikaze ta komponenta, a ponovnim klikom neka opet nestane. Moze da bude samo jedna kocka zakucanog widtha i background colora da se vidi na ekranu samo.

8.  NIZ - Napravite Menu komponentu. Imamo niz objekata koji ce da sadrze id, title i text. Neka oni budu jedna state promenjljiva. Imamo jedan div sa 3 buttona, gde je tekst svakog buttona title. Klikom na svaki od button-a ispod menija se prikaze tekst povezan sa tim buttonom (dakle, ako kliknemo na button 1, na kom pise BUTTON 1, sto je izvuceno iz propertija title, onda se ispod tog celog diva pojavi TESKST 1, koji je izvucen takodje iz istog objekta i njegovog propertija text). Tekst moze da bude odvojena state promenljiva koju cete promeniti na klik jednog od tri buttona i koja je po defaultu prazan string. (dakle imacete ovde 2 state promenljive, jedna je niz, a druga je tekst koji se dole prikazuje)

9.  Tab menu 2 - Napravite komponentu Sadrzaj koja u sebi ima naslov i tekst. U Menu komponenti napravite state promenljivu koja je objekat i po defaultu ima neki naslov i tekst i zove se sadrzaj npr. Opet jedan div sa 3 buttona, i klikom na button menjate state promenljivu, tako da se update Sadrzaj da ima naslov i tekst koji je u samom buttonu (iz niza, iz tog kliknutog buttona).

10. Napravite niz objekata "books". Neka svaka knjiga ima naslov, opis i autora. Napravite komponentu Books i komponentu Book. Neka iz Books roditelja neka pozovemo sve knjige koristeci niz koji smo napravili, tako da se prikazu sve knjige sa svojim naslovom, opisom i autorom. Klikom na bilo koju knjigu, neka ta knjiga dobije drugi background (koristite state i gledajte da li je modifier klasa aktivna ili ne).

11. Neka opis knjige odozgo bude malo veci. Napravite da tekst moze da ima do 120 karaktera, a ako ima preko, neka se ispise tih 120 karaktera i ... . Posle teksta napravite da stoji button u kom prvobitno pise "show more", koji kad se klikne prikaze se ceo tekst, i tekst tog buttona se promeni u "show less". Tako da klikom na taj button radite toggle i teksta (opisa) knjige i teksta samog buttona.

12. Slajder. Napravite jednostavan slajder koji nema nikakve efekte, vec samo na klik promeni slajd (prikaze se onaj koji treba, drugi su skriveni). Napravite niz objekata gde ce svaki objekat nositi informaciju jednog slajda. Napravite Slider komponentu i Slide komponentu. Prikazite trenutni slajd. Klikom na levo / desno, prikazite predjasnji / sledeci slajd. (tip: bez efekata, sve kroz map fju. tip tip: index koji pokazuje trenutni slajd moze biti state promenljiva, i sve gledamo po njoj, ali radite kako je vama lakse)

13. Promenite nextSlide fju (kako god da ste je napisali) tako da unutar setIndex / setSlideIndex (kako god vam se zove fja koja postavlja trenutni index) imate celu logiku, tako da ne menjate direktno ovaj state, nego kroz fju, kao u zadatku 5 gore.

*/