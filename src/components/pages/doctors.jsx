import React, { useEffect, useState } from "react";
import '../styles/doctorHospital.css';
import DoctorComponent from "./doctorComponent";
import { supabase } from "../../../config/supabase";

const doctorList = [
    {
        id: 1,
        name: "Dr Amadou Diallo",
        specialty: "Cardiologue",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        location: "Clinique du Cap Vert, Almadies",
        rating: 4.8,
        reviews: 128,
        price: "15 000 FCFA",
        available: true,
        description: "Spécialiste des maladies cardiovasculaires avec 15 ans d'expérience"
    },
    {
        id: 2,
        name: "Dr Fatou Ndiaye",
        specialty: "Pédiatre",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        location: "Hôpital Principal de Dakar",
        rating: 4.9,
        reviews: 215,
        price: "12 000 FCFA",
        available: true,
        description: "Spécialiste en pédiatrie et suivi de croissance des enfants"
    },
    {
        id: 3,
        name: "Dr Moussa Sarr",
        specialty: "Dentiste",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        location: "Cabinet Dentaire, Sacré-Cœur",
        rating: 4.7,
        reviews: 189,
        price: "10 000 FCFA",
        available: true,
        description: "Spécialiste en chirurgie dentaire et implantologie"
    },
    {
        id: 4,
        name: "Dr Aïssatou Diop",
        specialty: "Gynécologue",
        image: "https://images.unsplash.com/photo-1594824434340-7e7dfc37cabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        location: "Clinique de la Madeleine",
        rating: 4.6,
        reviews: 175,
        price: "14 000 FCFA",
        available: true,
        description: "Spécialiste en gynécologie-obstétrique"
    },
    {
        id: 5,
        name: "Dr Cheikh Bâ",
        specialty: "Dermatologue",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        location: "Polyclinique de Dakar",
        rating: 4.5,
        reviews: 142,
        price: "13 000 FCFA",
        available: true,
        description: "Spécialiste en dermatologie et maladies de la peau"
    },
    {
        id: 6,
        name: "Dr Jean Diouf",
        specialty: "Médecin Généraliste",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        location: "Cabinet Médical, Point E",
        rating: 4.4,
        reviews: 98,
        price: "8 000 FCFA",
        available: true,
        description: "Médecin généraliste avec 10 ans d'expérience"
    }
];
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const { data, error } = await supabase
                    .from("doctors")
                    .select("*");

                if (error) throw error;
                
                console.log("Doctors", data);
                
                setDoctors(data);
            } catch (err) {
                console.error("Erreur Supabase", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    if(loading) return <p> Chargement ... </p>
    return (
        <section id="doctors" class="doctors-section">
            <div class="container">
                <h2 class="section-title">Médecins disponibles à Dakar</h2>
                <div class="doctors-grid" id="doctorsList">
                    {/*  <!-- Doctors will be loaded by JavaScript --> */}
                    {
                        doctors.map((doctor, i) => {
                            return <DoctorComponent doctor={doctor} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Doctors