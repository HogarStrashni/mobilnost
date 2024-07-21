import Image from "next/image";
import React from "react";

import placeholder from "@/assets/placeholder.png";

const IndividualProject = () => {
  return (
    <div className="space-y-6 pb-12 lg:border-r lg:pr-4">
      <h1 className="text-lg uppercase">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </h1>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        excepturi non quod in inventore iste velit assumenda illum autem
        cupiditate. Sequi esse accusantium vitae consectetur aperiam facere
        repudiandae assumenda, commodi incidunt illo ab nesciunt aliquam ex vero
        consequuntur a numquam quo. Sunt explicabo cum atque quo. Omnis ratione
        necessitatibus excepturi.
      </p>
      <div>
        <Image
          src={placeholder}
          alt="placeholder"
          className="h-full rounded object-cover"
          priority
        />
      </div>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        excepturi non quod in inventore iste velit assumenda illum autem
        cupiditate. Sequi esse accusantium vitae consectetur aperiam facere
        repudiandae assumenda, commodi incidunt illo ab nesciunt aliquam ex vero
        consequuntur a numquam quo. Sunt explicabo cum atque quo. Omnis ratione
        necessitatibus excepturi.
      </p>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        pariatur hic optio nulla! Porro reiciendis omnis harum eligendi aut
        optio minus nobis labore ipsa natus commodi dolor repudiandae, eaque,
        repellat nam dicta? Tenetur ab accusamus corrupti cum, maiores quos
        ipsam expedita. Ex eligendi esse aliquid consequatur nihil voluptates,
        corporis eveniet laudantium tenetur voluptatum, neque possimus aut porro
        earum. Tempora illo maiores temporibus. Distinctio minus exercitationem
        sint sapiente beatae pariatur deleniti magni, laboriosam blanditiis
        voluptates earum ab nemo asperiores a maxime explicabo suscipit.
        Doloremque nesciunt praesentium ullam quae odio laudantium in sint ex
        eligendi suscipit id recusandae minus laboriosam, necessitatibus fugiat.
        Similique, ducimus, debitis eaque consequuntur asperiores perferendis
        quis veniam blanditiis dolorem facere vel praesentium consectetur neque,
        reiciendis minima architecto earum soluta. Expedita repudiandae et
        consequuntur ipsam totam vitae a, voluptatum nulla temporibus soluta
        consequatur fugiat excepturi laboriosam vero. Vero aut tenetur cum iste
        neque molestiae? Eveniet rem deleniti maxime voluptatem autem sit quos
        impedit rerum ad repudiandae ea quo, omnis nemo dolores commodi ipsa
        quae ipsum quam, accusamus hic quasi inventore tempore? Dolore et
        aliquid, voluptatibus impedit earum ipsa accusamus deleniti atque quasi,
        recusandae accusantium molestiae dolores vero doloremque nisi ex fugit
        dolorem incidunt deserunt modi esse. Natus, facilis praesentium?
      </p>
    </div>
  );
};

export default IndividualProject;
