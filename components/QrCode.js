import React from 'react'
import Image from "next/image";

const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://social-club.vercel.app/`;
import axios from "axios";
import { useState, useEffect } from "react";
export default function QrCode() {
    const [qrcode, setQrcode] = useState('');
    useEffect(async () => {
  
        await axios.get(qrUrl).then((data) => {
          setQrcode(data);
        });
      });
    //   console.log(qrcode);
    return (
        <div>
            <div class="p-4 w-80">
                <div class="p-8 bg-white rounded-[16.84px] shadow-md">
                    <h2 class="text-xl font-bold text-[#274C77]">Qr Code</h2>
                    <p class="text-gray-600"></p>
                    <br/>
                    <img
                    src={qrUrl}
                    />
                </div>
            </div>
        </div>
    )
}
