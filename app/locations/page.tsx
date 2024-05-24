import Image from 'next/image'
import React from 'react'

import styles from '../../styles/modules/Locations.module.scss';
import locationsImg from '../../public/assets/locations-illustration.svg';

const page = () => {
  return (
    <main className={styles.main}>
      <Image
        src={locationsImg}
        width={326}
        height={202}
        alt="Locations illustration"
      />

      <div>
        <input type="text" />
        <select name="type" id="type">
          <option value="type">Type</option>
          <option value="planet">Planet</option>
          <option value="space station">Space station</option>
        </select>
      </div>
    </main>
  )
}

export default page