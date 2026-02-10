import React from "react";
import '../styles/dashboard.css';

const Dashboard = () => {

    return (
        <section id="dashboard" class="dashboard">
            <div class="container">
                <div class="dashboard-header">
                    <div class="user-info">
                        <div class="user-avatar" id="userAvatar">JD</div>
                        <div>
                            <h2>Bonjour, <span id="userName">Jean Dupont</span></h2>
                            <p id="userEmail">jean.dupont@email.com</p>
                        </div>
                    </div>
                    <button id="logoutBtn" class="btn btn-login">Déconnexion</button>
                </div>

                <div class="dashboard-grid">
                    <div class="dashboard-card">
                        <h3>Mes rendez-vous</h3>
                        <ul class="appointment-list" id="userAppointments">
                            {/* <!-- Appointments will be loaded here --> */}
                        </ul>
                    </div>

                    <div class="dashboard-card">
                        <h3>Mes médecins</h3>
                        <div id="favoriteDoctors">
                           {/*  <!-- Favorite doctors will be loaded here --> */}
                        </div>
                    </div>

                    <div class="dashboard-card">
                        <h3>Documents médicaux</h3>
                        <div id="medicalDocuments">
                            <p>Aucun document pour le moment</p>
                            <button class="btn-view">Ajouter un document</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;