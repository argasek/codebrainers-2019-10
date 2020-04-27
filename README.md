This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Plantastic 

In the project directory, you can run:

### Zadania domowe

#### 2020.04.25
 
1. :white_check_mark: Zrefaktoruj projekt w taki sposób, aby każde z pól formularza PlantForm było osobnym komponentem. (W razie wątpliwości zerknij na przykład w postaci `PlantFormFieldExposure.jsx`)
2. :white_check_mark: Przeszukaj projekt w poszukiwaniu bloków podpisanych jako "TODO" albo "FIXME"
3. :white_check_mark: W każdym komponencie, gdzie mamy zdefiniowane propTypes i przekazujemy tablicę obiektów bądź obiekt, wykorzystaj `PropTypes.shape` aby dokładniej opisać interfejs oczekiwanego obiektu. Wzoruj się na `Plant.propTypes`. Uważnie obserwuj konsolę deweloperską. Postaraj się, aby nie było żadnych ostrzeżeń związanych z propTypes!
4. :white_check_mark: We wszystkich sytuacjach, gdzie nie udało nam się czegoś pobrać z serwera, zastosuj elegancki komponent o nazwie `<Alert>` w wariancie `danger` pochodzący z pakietu **Reactstrap**
5. :white_check_mark: Opisz dokładnie dlaczego nie możemy `if (promise) { … }`
6. :white_check_mark: Spraw aby `totalPlants` w `PlantsContainer.jsx` zwracało prawidłową całkowitą liczbę kwiatków we wszystkich pokojach.
7. :white_check_mark: Przerób kod tak, aby progress indicator "Loading data…" był wyświetlany natychmiast po aktywacji komponentu Plants i był wyświetlany tak długo dopóki nie załadują się zarówno kwiaty jak i kategorie.
8. *Dodaj w tabeli "List of plants" wyświetlanie nazwy pokoju w oparciu o [API call dostępny tutaj](http://gentle-tor-07382.herokuapp.com/rooms/). Tabela plants powinna się wyświetlać a progress indicator nie znikać tak długo dopóki wszystkie dane z serwera nie zostaną ściągnięte (tj. Plants, Categories i Rooms). 

#### 2020.04.18

1. Dodać pola lastWatered i lastFertilized.
2. Na liście Plants wyświetlać więcej informacji niż tylko nazwę. Posłuż się https://getbootstrap.com/docs/4.4/content/tables/
https://reactstrap.github.io/components/tables/
Wykorzystaj tabelę. 

#### 2020.04.15

1. Analogicznie jak w przypadku `ROUTE_CATEGORIES`, dodaj pozostałe dwie stałe dla `ROUTE_PLANTS` i `ROUTE_ROOMS`, oraz użyje je w kodzie w tagach `<Route>`.
2. Na podobnej zasadzie jak zrobiliśmy to z `AuthenticatedNavbarItem`, zrefaktoruj jako osobne komponenty:
a) blok `<Navbar>` (wraz tagiem Navbar)
b) blok `<Container>` (wraz tagiem Container)
c) trzy osobne komponenty, zawierające to, co leży **wewnątrz** każdego taga `<Route>`
3*. Przerób kod w taki sposób, aby kategorie wczytywały się po każdej nawigacji do `/categories` (obecnie wczytują się one tylko gdy uruchamiana jest aplikacja po raz 1.)   

