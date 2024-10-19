import { useState, useContext, useEffect } from "react";
import ClientsAddForm from "../../components/ClientsAddForm";
import ClientsHeader from "../../components/ClientsHeader";
import ClientsPopup from "../../components/ClientsPopup";
import Client from "../../components/Client";

// import useBlackout from "../../hooks/useBlackout";
import { appContext } from "../../context";
import "../../assets/styles/index.scss";
import "./styles.scss";
import { FcPrevious } from "react-icons/fc";

export default function Clients() {
  // const { setIsActiveMenu } = useContext(appContext);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(0);
  // useBlackout([isAddFormVisible, isPopupVisible]);
  const [clients, setClients] = useState(false);
  const [popupCliend,setPopupCliend] = useState(0)
  const [page, setPage] = useState(0);
  const limit = 3;

  const OpenPopup = (ind) => {
	setIsPopupVisible(prev=>!prev)
	setPopupCliend(ind)
  };

  useEffect(() => {
    fetch("/api.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setClients(data.data.Clients.slice(page * limit, page * limit + limit));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <>
      <ClientsHeader setIsPopup={setIsAddFormVisible} />
      <div className="clients">
        <div className="clients__container scrollbar">
          <div className="clients__table">
            <div className="clients__table-row">
              <span className="clients__table-header">
                Клиент
                <svg className="clients__table-icon" height="14" width="9">
                  <use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-sorting" />
                </svg>
              </span>
              <span className="clients__table-header">Визиты</span>
              <span className="clients__table-header">Оплачено</span>
              <span className="clients__table-header">Средний чек</span>
              <span className="clients__table-header">Последний визит</span>
              <span className="clients__table-header">День рождения</span>
            </div>
            {clients &&
              clients.map((client, ind) => {
                return (
                  <Client
                    key={client.clientid}
                    checkMore={()=>OpenPopup(ind)}
                    src="client-1.png"
                    name={client.name.toString()}
                    phone={client.phone.toString()}
                    visits={client.visits.toString()}
                    payed={client.Info.Stats[0].sum.toString()}
                    averageCheck={
                      client.Info.Stats[0].AverageCheck.toString() + "₽"
                    }
                    lastVisit={client.lastvisit.toString()}
                    date={client.dateofbirth.toString()}
                  />
                );
              })}
          </div>
        </div>
        <div className="clients__pagination">
          <button className="clients__pagination-arrow left">
            <svg className="clients__pagination-icon" height="17" width="17">
              <use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-arrow-left" />
            </svg>
          </button>
          <button
            className="clients__pagination-button active"
            onClick={() => setPage(0)}
          >
            1
          </button>
          <button
            className="clients__pagination-button"
            onClick={() => setPage(1)}
          >
            2
          </button>
          <button
            className="clients__pagination-button"
            onClick={() => setPage(2)}
          >
            3
          </button>
          <button className="clients__pagination-arrow right">
            <svg className="clients__pagination-icon" height="17" width="17">
              <use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-arrow-right" />
            </svg>
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsAddFormVisible((prev) => !prev)}
        className="clients__add"
      >
        <svg className="clients__add-icon" height="24" width="24">
          <use xlinkHref="/src/assets/icons/Header_Sprite.svg#icon-header-add" />
        </svg>
        Добавить клиента
      </button>

      <ClientsAddForm
        isVisible={isAddFormVisible}
        setIsVisible={setIsAddFormVisible}
      />
      <ClientsPopup
        isVisible={isPopupVisible}
        setIsVisible={setIsPopupVisible}
		client={clients[popupCliend]}
      />
    </>
  );
}
