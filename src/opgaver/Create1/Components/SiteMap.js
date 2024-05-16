import React from "react";

function SiteMap() {
  return (
    <div className="bg-white text-black p-8 w-[26.25rem] h-[20rem] overflow-auto">
      <h2 className="text-2xl mb-4">Site Map</h2>
      <p>
        Velkommen til vores webstedskort! Her finder du en oversigt over alle de
        vigtige sider og sektioner på vores hjemmeside.
      </p>
      <h3 className="text-lg font-semibold mt-4">Hjem</h3>
      <p>Velkomstsiden med information om vores virksomhed og tjenester.</p>
      <h3 className="text-lg font-semibold mt-4">Produkter</h3>
      <p>En liste over vores produkter, deres beskrivelser og priser.</p>
      <h3 className="text-lg font-semibold mt-4">Kontakt os</h3>
      <p>
        Kontaktformular og kontaktinformation for at nå ud til vores
        kundeservice.
      </p>
      <h3 className="text-lg font-semibold mt-4">Vilkår og Betingelser</h3>
      <p>
        Vores vilkår og betingelser for brugen af vores hjemmeside og tjenester.
      </p>
      <h3 className="text-lg font-semibold mt-4">Privatlivspolitik</h3>
      <p>
        Information om, hvordan vi indsamler, bruger og beskytter dine
        personlige oplysninger.
      </p>
    </div>
  );
}

export default SiteMap;
