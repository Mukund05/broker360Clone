import React, { useEffect, useState } from "react";
import { IconButton, CircularProgress, List, ListItem, ListItemText, ListItemSecondaryAction, Button, Collapse } from "@mui/material";
import { Delete, Edit, ExpandMore, ExpandLess } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CustomHeader from "../elements/CustomHeader";
import Footer from "../elements/Footer";
import api from "../Api";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
    
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.getContacts();
        setContacts(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load contacts. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.deleteContact(id);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (err) {
      setError(err.response?.data?.error || "Failed to delete contact. Please try again.");
    }
  };

  const handleEdit = (contact) => {
    navigate(`/update-contact/${contact.id}`, { state: { contact } });
  };

  const handleToggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="">
      <CustomHeader />
      <div className="bg-[#eff6ff] p-4 min-h-screen">
        <div className="w-full xs:w-4/5 sm:w-2/3 md:w-2/3 m-auto flex flex-col justify-center items-center text-center gap-y-6 py-8">
          <span className="text-[#011B4E] text-2xl sm:text-3xl md:text-5xl font-bold">Contact List</span>
          <Button
            className="bg-[#011B4E] text-white font-semibold py-2 px-4 rounded-lg mb-4 hover:bg-[#011B4E]/80 transition duration-200 ease-in-out"
            onClick={() => navigate("/addContacts")}
          >
            Create Contact
          </Button>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <span className="text-red-500">{error}</span>
          ) : (
            <List className="w-full">
              {contacts.map((contact) => (
                <div key={contact.id} className="mb-4 bg-white shadow-md rounded-lg">
                  <ListItem>
                    <ListItemText
                      primary={`${contact.name} ${contact.last_name}`}
                      secondary={expanded === contact.id ? `${contact.email} - ${contact.number}` : ''}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" onClick={() => handleEdit(contact)}>
                        <Edit />
                      </IconButton>
                      <IconButton edge="end" onClick={() => handleDelete(contact.id)}>
                        <Delete />
                      </IconButton>
                      <IconButton edge="end" onClick={() => handleToggleExpand(contact.id)}>
                        {expanded === contact.id ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Collapse in={expanded === contact.id} timeout="auto" unmountOnExit>
                    <div className="bg-[#f9f9f9] p-4 rounded-b-lg">
                      <table className="table-auto w-full">
                        <tbody>
                          <tr>
                            <td className="font-bold">Position:</td>
                            <td>{contact.position}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Company:</td>
                            <td>{contact.company}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Fountain:</td>
                            <td>{contact.fountain}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Email:</td>
                            <td>{contact.email}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Phone Number:</td>
                            <td>{contact.number}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Twitter:</td>
                            <td>{contact.twitter}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">LinkedIn:</td>
                            <td>{contact.linkedin}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Skype:</td>
                            <td>{contact.skype}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Website:</td>
                            <td>{contact.website}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Address:</td>
                            <td>{contact.address}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Description:</td>
                            <td>{contact.description}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Collapse>
                </div>
              ))}
            </List>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactList;
