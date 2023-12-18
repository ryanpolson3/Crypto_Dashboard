import { Form } from "@remix-run/react";
import type { FunctionComponent } from "react";
import type { ContactRecord } from "~/data";

export default function Contact() {
   const contact = {
      first: "Ryan",
      last: "Olson",
      avatar: "https://placekitten.com/g/200/200",
      twitter: "ryan_olson@twitter",
      notes: "Some notes",
      favorite: true,
   };

   return (
      <div id="contact">
         <div>
            <img 
               src={contact.avatar} 
               alt={`${contact.first} ${contact.last} avatar`}
               key={contact.avatar} />
         </div>
      </div>
   )
}