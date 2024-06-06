import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/turnPhone");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <article className="col-12 col-md-6 col-lg-4 text-center">
        <section>
          <div className="d-flex flex-column align-items-center">
            <img src="/images/Loading.png" alt="loading" />
            <p>Velkommen til forestilling!</p>
          </div>
          <section>
            <div className="card2 shadow rounded p-3 card-body m-5">
              <p>
                Dette er en interaktiv forestilling hvor du bestemmer
                handlingen. Velg navn og karakter på neste side, følg deretter
                med på scenen for instrukser.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleClick}
                >
                  START
                </button>
              </div>
            </div>
          </section>
        </section>
      </article>
    </div>
  );
};
export default Landing;

//     <div className="d-flex align-items-center justify-content-center">
//       <article className="col-12 col-md-6 col-lg-4">
//         <div className="">
//           <h1 className=""> LOADING </h1>
//           <p className=""> Velkommen til forestilling!</p>
//           <div className="card2 shadow rounded p-2 m-2 card-body">
//             <p className="text-center">
//               Dette er en interaktiv forestilling hvor du bestemmer handlingen.
//               <br></br> Velg navn og karakter på neste side, følg deretter med
//               på scenen for instrukser.
//             </p>
//             <div className=" text-center">
//               <button
//                 type="button"
//                 className="btn btn-success"
//                 onClick={handleClick}
//               >
//                 START
//               </button>
//             </div>
//           </div>
//         </div>
//       </article>
//     </div>
