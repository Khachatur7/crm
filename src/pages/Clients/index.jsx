import { useState, useContext } from "react";

import ClientsAddForm from "../../components/ClientsAddForm";
import ClientsHeader from "../../components/ClientsHeader";
import ClientsPopup from "../../components/ClientsPopup";
import Client from "../../components/Client";

// import useBlackout from "../../hooks/useBlackout";
import { appContext } from "../../context";

import "../../assets/styles/index.scss"
import "./styles.scss"


export default function Clients() {
	// const { setIsActiveMenu } = useContext(appContext);
	const [isAddFormVisible, setIsAddFormVisible] = useState(false);
	const [isPopupVisible, setIsPopupVisible] = useState(false);

	// useBlackout([isAddFormVisible, isPopupVisible]);


	return (
		<>
			<ClientsHeader setIsPopup={ setIsAddFormVisible }/>
			<div className="clients">
				<div className="clients__container scrollbar">
					<div className="clients__table">
						<div className="clients__table-row">
							<span className="clients__table-header">
								Клиент
								<svg className="clients__table-icon" height="14" width="9">
									<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-sorting"/>
								</svg>
							</span>
							<span className="clients__table-header">Визиты</span>
							<span className="clients__table-header">Оплачено</span>
							<span className="clients__table-header">Средний чек</span>
							<span className="clients__table-header">Последний визит</span>
							<span className="clients__table-header">День рождения</span>
						</div>
						<Client
							checkMore={ () => setIsPopupVisible(prev => !prev) }
							src="client-1.png"
							name="Жуков Антон"
							phone="+7 987 984 65-76"
							visits="0"
							payed="0₽"
							averageCheck="0₽"
							lastVisit="-"
							date="24.07.1990"
						/>
						<Client
							checkMore={ () => setIsPopupVisible(prev => !prev) }
							src="client-2.png"
							name="Медведев Юрий"
							phone="+7 456 232 55-55"
							visits="0"
							payed="0₽"
							averageCheck="0₽"
							lastVisit="-"
							date="24.07.1990"
						/>
						<Client
							checkMore={ () => setIsPopupVisible(prev => !prev) }
							src="client-3.png"
							name="Калинин Петр"
							phone="+7 489 590 12-32"
							visits="0"
							payed="0₽"
							averageCheck="0₽"
							lastVisit="-"
							date="30.12.1999"
						/>
						<Client
							checkMore={ () => setIsPopupVisible(prev => !prev) }
							src="client-4.png"
							name="Борисов Дмитрий"
							phone="+7 987 137 09-34"
							visits="0"
							payed="0₽"
							averageCheck="0₽"
							lastVisit="-"
							date="03.04.1985"
						/>
					</div>
				</div>
				<div className="clients__pagination">
					<button className="clients__pagination-arrow left">
						<svg className="clients__pagination-icon" height="17" width="17">
							<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-arrow-left"/>
						</svg>
					</button>
					<button className="clients__pagination-button active">1</button>
					<button className="clients__pagination-button">2</button>
					<button className="clients__pagination-button">3</button>
					<button className="clients__pagination-arrow right">
						<svg className="clients__pagination-icon" height="17" width="17">
							<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-arrow-right"/>
						</svg>
					</button>
				</div>
			</div>
			<button onClick={ () => setIsAddFormVisible(prev => !prev) } className="clients__add">
				<svg className="clients__add-icon" height="24" width="24">
					<use xlinkHref="/src/assets/icons/Header_Sprite.svg#icon-header-add"/>
				</svg>
				Добавить клиента
			</button>

			<ClientsAddForm isVisible={ isAddFormVisible } setIsVisible={ setIsAddFormVisible }/>
			<ClientsPopup isVisible={ isPopupVisible } setIsVisible={ setIsPopupVisible }/>
		</>
	);
};