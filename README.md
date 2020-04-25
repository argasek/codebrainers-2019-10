This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Plantastic 

In the project directory, you can run:

### Zadania domowe

#### 2020.04.25

1. Zrefaktoruj projekt w taki sposób, aby każde z pól formularza PlantForm było osobnym komponentem. (W razie wątpliwości zerknij na przykład w postaci `PlantFormFieldExposure.jsx`) 

#### 2020.04.18

1. Dodać pola lastWatered i lastFertilized.
2. Na liście Plants wyświetlać więcej informacji niż tylko nazwę. Posłuż się https://getbootstrap.com/docs/4.4/content/tables/
https://reactstrap.github.io/components/tables/
Wykorzystaj tabelę. 

#### 2020.04.15

1. Analogicznie jak w przypadku `ROUTE_CATEGORIES`, dodaj pozostałe dwie stałe dla `ROUTE_PLANTS` i `ROUTE_ROOMS`, oraz użyje je w kodzie w tagach `<Route>`.
2. Na podobnej zasadzie jak zrobiliśmy to z `PlantasticNavItem`, zrefaktoruj jako osobne komponenty:
a) blok `<Navbar>` (wraz tagiem Navbar)
b) blok `<Container>` (wraz tagiem Container)
c) trzy osobne komponenty, zawierające to, co leży **wewnątrz** każdego taga `<Route>`
3*. Przerób kod w taki sposób, aby kategorie wczytywały się po każdej nawigacji do `/categories` (obecnie wczytują się one tylko gdy uruchamiana jest aplikacja po raz 1.)   

