import React from 'react'
import dt1 from '../img/doitac/dt-1.png';
import dt2 from '../img/doitac/dt-2.png';
import dt3 from '../img/doitac/dt-3.png';
import dt4 from '../img/doitac/dt-4.png';
import dt5 from '../img/doitac/dt-5.png';
import dt6 from '../img/doitac/dt-6.png';
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaGooglePlusSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div>
    <footer>
    <div className="slide-panter">
      <div className="container">
        <div className="simply-scroll simply-scroll-container">
          <div className="simply-scroll-clip">
            <ul className="simply-scroll-list" style={{ width: 2470 }}>
              <li>
                <a href="#" title="dt-1">
                  <img src={dt1} alt="dt-1" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-2">
                  <img src={dt2} alt="dt-2" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-3">
                  <img src={dt3} alt="dt-3" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-4">
                  <img src={dt4} alt="dt-4" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-5">
                  <img src={dt5} alt="dt-5" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-6">
                  <img src={dt6} alt="dt-6" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-1">
                  <img src={dt1} alt="dt-1" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-2">
                  <img src={dt2} alt="dt-2" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-3">
                  <img src={dt3} alt="dt-3" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-4">
                  <img src={dt4} alt="dt-4" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-5">
                  <img src={dt5} alt="dt-5" />
                </a>
              </li>
              <li>
                <a href="#" title="dt-6">
                  <img src={dt6} alt="dt-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="container">
        <div className="box">
          <p className="tit">C??ng Ty Cp GEMACHEM Vi???t Nam</p>
          <div className="list-ft">
            <p>
              <b>Tr??? s???:</b> S??? 203 Ng?? Gia T???, Ph?????ng ?????c Giang, Qu???n Long
              Bi??n, H?? N???i, Vi???t Nam
            </p>
            <p>
              <b>VPGD:</b> S??? 46 Ng?? Quy???n, Ph?????ng H??ng B??i, Qu???n Ho??n Ki???m, H??
              N???i, Vi???t Nam
            </p>
            <p>
              <b>??i???n tho???i:</b> 008424392333254 - <b>Fax:</b> 00842439387667
            </p>
            <p>
              <b>Email:</b> contact@gemachem.com.vn
            </p>
            <p>
              <b>Website:</b> www.gemachem.com.vn
            </p>
          </div>
        </div>
        <div className="box">
          <p className="tit">Danh m???c</p>
          <ul>
            <li>
              <a href="#" title="Gi???i thi???u">
                Gi???i thi???u
              </a>
            </li>
            <li>
              <a href="#" title="S???n ph???m">
                S???n ph???m
              </a>
            </li>
            <li>
              <a href="#" title="D???ch v???">
                D???ch v???
              </a>
            </li>
            <li>
              <a href="#" title="Tin t???c">
                Tin t???c
              </a>
            </li>
            <li>
              <a href="#" title="Tuy???n d???ng">
                Tuy???n d???ng
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
          <p className="tit">????ng k?? nh???n tin ?????nh k???</p>
          <div className="form-footer">
            <form action="#">
              <input type="text" placeholder="Nh???p email c???a b???n" />
              <button className="ic-fly" />
            </form>
          </div>
          <ul class="list-social">
                <li>
                  <a href="#" title="Facebook"><FaFacebook size={30}/> </a>
                </li>
                <li>
                  <a href="." title="Twiter"><FaTwitter size={30}/></a>
                </li>
                <li>
                  <a href="" title="Google Plus"><FaGooglePlusSquare size={30}/></a>
                </li>
                <li>
                  <a href="" title="Youtube"><FaYoutube size={30}/></a>
                </li>
                <li>
                  <a href="" title="Instagram"><FaInstagram size={30}/></a>
                </li>
         </ul>
        </div>
      </div>
    </div>
    <div className="bot">
      <div className="container">
        <p className="copyright">
          B???n quy???n thu???c v??? Gemachem. Cung c???p b???i ADC Vi???t Nam.
        </p>
      </div>
    </div>
  </footer>
  <div style={{ position: "absolute", top: 0 }} />
    </div>
  )
}

export default Footer