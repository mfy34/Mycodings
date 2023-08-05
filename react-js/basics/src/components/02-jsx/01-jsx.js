const Jsx1 = () => {
          const name = "john doe"

         const user = {
          name: "Jonathan",
          age: 30,
         }

          return(
  <>
  <p>
 Butun jsx kodlari bir element içinde olmalidir.
 {/* ben bir yorum satırıyım*/}

  </p>
  <p>
       Merhaba {name}

  </p>
  <h2>KULLANICI BİLGİLERİ</h2>
  <p>
          Kullanici Adi : {user.name}
          </p>
          <p>
                    Yasi: {user.age}
          </p>

  
  
  </>



          )
}
export default Jsx1