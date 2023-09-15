import React from 'react'
import Img from "../assests/temp.jpg"
import { Link } from 'react-router-dom'
import Image from "../assests/image.jpeg"
import Delete from "../assests/bin.png"
import Edit from "../assests/pen.png"
import Menu from 'components/Menu'

const Single = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: `${Image}`,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: `${Image}`,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: `${Image}`,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: `${Image}`,
    },
  ];
  return (

    <div className='single'>

      {/* SINGLE POST */}
      <div className="content">
        <img src={Img} alt="Image" />

        <div className="user">
          <img src={Img} alt="" />
          <div className="info">
            <span>john doe</span>
            <p>Posted 3 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={`/write?edit=2`}><img src={Edit} alt="" /></Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eaque ratione. Quisquam commodi laborum voluptatum possimus amet, enim corporis quibusdam quo iste atque quam, facilis blanditiis, laboriosam voluptate. Dolore quaerat dolor labore eos, error mollitia placeat. Ratione accusantium earum provident quam facilis quae voluptatibus excepturi reprehenderit magni voluptatem minus, ut quo libero! Harum hic quia blanditiis quos animi eius, error minus architecto ullam illo quasi quo ea, expedita id, provident autem quidem earum. Fugit eveniet voluptates cupiditate dolorem! Sint, corporis. Deleniti placeat perspiciatis totam itaque reprehenderit hic corrupti animi eum commodi illum, ad facere pariatur iusto, consectetur autem quod! Labore, beatae! Repudiandae odit neque reiciendis mollitia eius fugiat voluptatem, ab et reprehenderit ad corporis praesentium animi hic doloribus rerum ut amet soluta dignissimos. Magni nihil cumque et architecto laudantium cum. Aut neque eaque repellendus, natus ipsam blanditiis vitae necessitatibus inventore eos a, cumque obcaecati, nihil laborum eum nam maxime sapiente quibusdam maiores dolor praesentium ipsum quisquam perspiciatis. Consectetur, obcaecati aspernatur magni facilis quam minus, numquam, debitis cumque eos pariatur dicta at eius ut corporis! Facilis doloribus mollitia vero ipsum voluptatem nam consectetur quis modi nostrum officiis quasi labore aliquam vitae minima dolores inventore animi iusto, sequi repellat alias ut? Qui, minus unde ipsa dolorum beatae ipsam mollitia molestias deserunt repellendus veritatis et! Nesciunt doloremque commodi consequatur laboriosam? Ea, quam exercitationem ab voluptatem architecto assumenda autem ipsam a officia ratione numquam sapiente, nesciunt perferendis veniam ex officiis quidem blanditiis explicabo, enim vel cumque rem consectetur laudantium hic. Incidunt distinctio commodi mollitia ex unde molestias aliquam quibusdam. Illo quos qui a, quaerat quidem incidunt cumque consequatur possimus officiis accusamus soluta, libero ad at saepe dolorum distinctio ex ducimus et corrupti. Impedit, doloribus exercitationem commodi esse ab dolorum et. Quae enim maiores dolor provident harum exercitationem obcaecati aperiam quisquam quidem labore quas, numquam omnis consequuntur vero praesentium repudiandae magni earum beatae quaerat nesciunt tempora molestias? Adipisci nesciunt explicabo quod sed sunt, quia assumenda molestiae vero laboriosam minima nostrum, numquam similique modi? Illo architecto quasi reiciendis earum assumenda officiis mollitia vel dolor voluptates temporibus sunt cum inventore, accusantium dolores, eius molestiae tempora veniam quae nam qui. Ratione explicabo distinctio, fuga dolore, quis nam illum expedita maiores accusantium recusandae, quo quam! Incidunt vel quia doloremque modi adipisci, distinctio omnis eaque dolorum placeat, ipsam laboriosam? Reiciendis maiores quo totam perferendis asperiores itaque, officia sit omnis. Est nisi alias, placeat quibusdam saepe eveniet unde a tempora id culpa esse corporis, quod nam deserunt. Placeat quasi libero eveniet accusantium quaerat ducimus sit ad, quos hic excepturi obcaecati atque repellat laboriosam. Quidem qui, deleniti iure hic impedit, vel ad molestias perspiciatis illo quo placeat minima architecto molestiae, ullam laboriosam cum aliquid temporibus ab explicabo debitis corporis aperiam. Cupiditate non deleniti, sint, quibusdam earum error eligendi laboriosam mollitia minima quia iste tenetur voluptas eos dicta suscipit est veritatis facere. Optio est deserunt aliquid vel vero! Atque, officia facere. Nostrum repellendus eius earum voluptatum voluptas eaque neque nam nulla minima, possimus, in consectetur odit, itaque illo sit dolorum omnis consequuntur? Voluptatum?</p>
      </div>

      {/* SIDE MENU */}
      <Menu />
    </div>
  )
}


export default Single

