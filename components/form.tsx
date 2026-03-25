"use client";

import { useState } from "react";
import {
  CyberForm,
  CyberInput,
  CyberSelect,
  CyberSelection,
  CyberTextarea,
} from "./ui/cybercn/form";
import { Button } from "./ui/cybercn/button";
import { Heading } from "./ui/cybercn/heading";

export function FormComponent() {
  // Controlled state for the entire rig
  const [formData, setFormData] = useState({
    alias: "V_NC_77",
    scanDate: "2077-12-10",
    syncTime: "23:59",
    biometrics: "",
    comms: "+44 020 7946 0000",
    securityLevel: 10,
    accessCode: "********",
    manifesto: "COVE_THE_CITY_IN_CHROME",
    district: "HAYWOOD",
    augmentation: "NEURAL_LINK",
    autoJack: true,
    hidOverride: false,
    encryptUplink: true,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(">>> UPLOADING_ENCRYPTED_PACKET:", formData);
    alert("DATA_UPLOAD_SUCCESSFUL: SHARDS_SYNCED");
  }

  return (
    <CyberForm className="w-1/3 p-4" onSubmit={handleSubmit}>
      {/* Identity & Chronos */}
      <CyberInput
        name="alias"
        type="text"
        value={formData.alias}
        onChange={handleChange}
        placeholder="USER_ALIAS"
      />
      <div className="grid grid-cols-2 gap-4">
        <CyberInput
          name="scanDate"
          type="date"
          value={formData.scanDate}
          onChange={handleChange}
        />
        <CyberInput
          name="syncTime"
          type="time"
          value={formData.syncTime}
          onChange={handleChange}
        />
      </div>

      {/* Hardware & Security */}
      <CyberInput name="biometrics" type="file" onChange={handleChange} />
      <CyberInput
        name="comms"
        type="phone"
        value={formData.comms}
        onChange={handleChange}
      />
      <CyberInput
        name="securityLevel"
        type="number"
        value={formData.securityLevel}
        onChange={handleChange}
      />
      <CyberInput
        name="accessCode"
        type="password"
        value={formData.accessCode}
        onChange={handleChange}
      />

      {/* Neural Manifest */}
      <CyberTextarea
        name="manifesto"
        rows={3}
        value={formData.manifesto}
        onChange={handleChange}
        placeholder="SYSTEM_MANIFESTO_..."
      />

      {/* Geolocation Select */}
      <CyberSelect
        name="district"
        value={formData.district}
        onChange={handleChange}
      >
        <option value="WATSON">WATSON_DISTRICT</option>
        <option value="WESTBROOK">WESTBROOK_JAPANTOWN</option>
        <option value="HAYWOOD">HAYWOOD_GLEN</option>
        <option value="PACIFICA">PACIFICA_ZONE</option>
      </CyberSelect>

      {/* Binary Logic: Radio Path */}
      <div className="flex flex-col space-y-1 my-4">
        <Heading Tag="h2" glitched className="text-[10px] mb-2 tracking-widest">
          // SELECT_AUG_PATH
        </Heading>
        <CyberSelection
          type="radio"
          name="augmentation"
          label="NEURAL_LINK_UPGRADE"
          value="NEURAL_LINK"
          checked={formData.augmentation === "NEURAL_LINK"}
          onChange={handleChange}
        />
        <CyberSelection
          type="radio"
          name="augmentation"
          label="SANDVISTAN_REFLEX"
          value="SANDVISTAN"
          checked={formData.augmentation === "SANDVISTAN"}
          onChange={handleChange}
        />
        <CyberSelection
          type="checkbox"
          name="hidOverride"
          label="ENABLE_HID_OVERRIDE"
          checked={formData.hidOverride}
          onChange={handleChange}
        />
        <CyberSelection
          type="checkbox"
          name="encryptUplink"
          label="ENCRYPT_DATA_UPLINK"
          checked={formData.encryptUplink}
          onChange={handleChange}
        />
      </div>

      {/* Binary Logic: Checkbox */}
      <CyberSelection
        type="checkbox"
        name="autoJack"
        label="AUTO_JACK_IN_ON_PROXIMITY"
        checked={formData.autoJack}
        onChange={handleChange}
      />

      <Button type="submit" variant="red" className="w-full mt-6">
        INITIALIZE_HANDSHAKE_
      </Button>
    </CyberForm>
  );
}
