import React from 'react';
import NavBar from '../components/NavBar';
import Footer from "../components/Footer"; 

const Team = () => {
  const members = [
    { name: 'Quazi Zarin Subah', id: 20220204079 },
    { name: 'Tathai Adhikary', id: 20220204094 },
    { name: 'Zarin Tasnim Ahmed', id: 20220204096 }
  ];

  return (
    <div style={styles.teamPage}>
        <NavBar/>
       
      <h1 style={styles.heading}>Meet Our Team</h1>
      <p style={styles.description}>
        Together, we strive to make a difference. Our mission is to provide support, hope, and essential resources to those in need. 
        Through kindness and commitment, we aim to create a world where no one is left behind.
      </p>
      <div style={styles.teamMembers}>
        {members.map((member) => (
          <div style={styles.teamMember} key={member.id}>
            <div style={styles.memberAvatar}>{member.name.charAt(0)}</div>
            <h2 style={styles.memberName}>{member.name}</h2>
            <p style={styles.memberId}>ID: {member.id}</p>
          </div>
        ))}
      </div>
      <footer style={styles.footer}>
        <p>“Alone we can do so little; together we can do so much.”</p>
      </footer>
      <Footer />
    </div>
  );
};

// Inline Styles
const styles = {
  teamPage: {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh'
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  description: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '30px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  teamMembers: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '20px'
  },
  teamMember: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    width: '220px',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative'
  },
  teamMemberHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)'
  },
  memberAvatar: {
    width: '70px',
    height: '70px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 15px'
  },
  memberName: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px'
  },
  memberId: {
    fontSize: '1rem',
    color: '#888'
  },
  footer: {
    marginTop: '50px',
    fontSize: '1.2rem',
    color: '#555',
    fontStyle: 'italic'
  }
};

export default Team;