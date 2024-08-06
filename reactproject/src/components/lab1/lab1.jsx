import "./lab1css.css"
function Lab1(){
    return(
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  />
  <div className="container123">
    <div className="avatar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmkmhxDJzNcx8qVsD0TobnQ1m06R0bvbYQKRYP8fFopt0S0or"
        alt=""
      />
    </div>
    <div className="name">
      <h1>Hoàng Gia Lâm</h1>
      <div className="specialize">Frond-End Developer</div>
      <ul className="contact">
        <li>
          <span>P</span> +84123456789
        </li>
        <li>
          <span>E</span> gialam.dev@gmail.com
        </li>
       
      </ul>
    </div>
    <div className="info">
      <ul>
        <li>
          From <b>Liên Chiểu - Đà Nẵng</b> - Việt Nam
        </li>
        <li>14/20/2004</li>
        <li>Cao đằng FPOLY Đà Nẵng</li>
      </ul>
    </div>
    <div className="intro">
      <h2>GIỚI THIỆU BẢN THÂN</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi
      omnis quasi dolores modi eius aliquam ipsum soluta, dolore tenetur
      excepturi praesentium porro alias itaque enim labore qui necessitatibus
      molestias hic cum deserunt ab! Illum sed eveniet distinctio, alias sunt
      repudiandae labore a dolorum tenetur? Harum deleniti mollitia odio neque.
    </div>
    <div className="experience">
      <h2>KINH NGHIỆM LÀM VIỆC</h2>
      <div className="item">
        <h4>Frond-end Developer</h4>
        <div className="time">
          <span>2020 - 2022</span>
          <span>ABC D company</span>
        </div>
        <div className="des">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          accusantium officia nobis quas excepturi consectetur quidem quia est
          neque doloremque.
        </div>
      </div>
      <div className="item">
        <h4>Student</h4>
        <div className="time">
          <span>2015 - 2019</span>
          <span>ACDC University</span>
        </div>
        <div className="des">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          accusantium officia nobis quas excepturi consectetur quidem quia est
          neque doloremque.
        </div>
      </div>
      <h2 className="skills">KĨ NĂNG</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Javascript</li>
        <li>PHP</li>
        <li>MySql</li>
        <li>ReactJS</li>
      </ul>
    </div>
    <div className="project">
      <h2>DỰ ÁN</h2>
      <div className="item">
        <h4>Website quản lý chi tiêu</h4>
        <div className="time">2020</div>
        <div className="web">www.lundevweb.com</div>
        <div className="location">Frond-end Developer</div>
        <div className="des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          consequatur amet sed, est eum facilis repellendus atque perspiciatis
          iste porro nobis autem explicabo expedita fugiat nostrum. Eveniet eum
          autem culpa!
          <ul>
            <li>Lorem ipsum dolordolores.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur, dolores.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur dolores.</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <h4>Website bán hàng</h4>
        <div className="time">2020</div>
        <div className="web">www.lundevweb.com</div>
        <div className="location">Frond-end Developer</div>
        <div className="des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          consequatur amet sed, est eum facilis repellendus atque perspiciatis
          iste porro nobis autem explicabo expedita fugiat nostrum. Eveniet eum
          autem culpa!
          <ul>
            <li>Lorem ipsum dolordolores.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur, dolores.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur dolores.</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <h4>Website quản lý nhân sự</h4>
        <div className="time">2020</div>
        <div className="web">www.lundevweb.com</div>
        <div className="location">Frond-end Developer</div>
        <div className="des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          consequatur amet sed, est eum facilis repellendus atque perspiciatis
          iste porro nobis autem explicabo expedita fugiat nostrum. Eveniet eum
          autem culpa!
          <ul>
            <li>Lorem ipsum dolordolores.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur, dolores.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur dolores.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</>
    );
}
export default Lab1;