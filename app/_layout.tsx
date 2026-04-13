import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* TIP NAVIGACIJE: STACK (Špil karata)
        - Najčešći tip. Ekrani se ređaju jedan na drugi.
        - Kada odete "Forward", novi ekran pokriva stari.
        - Kada pritisnete "Back", gornji ekran se sklanja.
        - Idealno za: Detalje proizvoda, Login forme, Podešavanja.
      */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> //
      Uključuje sve ekrane unutar (tabs) foldera, glavna navigacija aplikacije
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", headerTitle: "Unos tablica" }}
      />{" "}
      {/* Ostali tipovi navigacije:
        
        1. TABS (Paralelni svetovi):
           - Koristi se u app/(tabs)/_layout.tsx.
           - Ekrani stoje "rame uz rame".
           - Prelazak između njih ne kvari njihovo stanje (npr. skrol ostaje gde je bio).
           - Idealno za: Glavne sekcije (Home, Search, Profile).

        2. SLOT (Čista rupa / Propusnica):
           - Najjednostavniji layout.
           - Ne dodaje nikakav UI (nema headera, nema tabova).
           - Samo kaže: "Renderuj trenutnu stranicu tačno ovde".
           - Idealno za: Kada sami želite da dizajnirate 100% navigacije od nule.
      */}
    </Stack>
  );
}
