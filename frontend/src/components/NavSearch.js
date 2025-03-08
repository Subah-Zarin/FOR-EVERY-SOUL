import React, { useState, useEffect } from 'react';
import { Input, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/NavSearch.css';

const SearchBar = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); 

  // Handle search function
  const handleSearch = async (value) => {
    setSearchQuery(value);
    if (!value.trim()) {
      setSuggestions([]);
      setSearchResults([]);
      onSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/campaigns/search?query=${value}`);
      console.log('Search Results:', response.data);
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle search submission
  const handleSearchSubmit = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/campaigns/search?query=${searchQuery}`);
      console.log('Search Results:', response.data);
      setSearchResults(response.data); // Store final results
      setSuggestions([]); 
      onSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle clicking a suggestion
  const handleSuggestionClick = (campaign) => {
    setSearchQuery(campaign.title);
    setSearchResults([campaign]); // Show selected campaign
    setSuggestions([]); 
    onSearchResults([campaign]);
  };

  return (
    <div className="search-containerN">
      <Input
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        onPressEnter={handleSearchSubmit}
        style={{
          width: 200,
          borderRadius: '50px',
          padding: '8px 16px',
          border: '1px solid #ccc',
        }}
      />
      {loading && <Spin size="small" style={{ marginLeft: '10px' }} />}

      {/* Dropdown for search suggestions */}
      {suggestions.length > 0 && (
        <ul className="suggestions-dropdownN">
          {suggestions.map((campaign) => (
            <li key={campaign._id} onClick={() => handleSuggestionClick(campaign)}>
              <img src={campaign.imageUrl} alt={campaign.title} className="suggestion-imageN" />
              {campaign.title}
            </li>
          ))}
        </ul>
      )}

      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <section className="search-resultsN">
          <h3>Search Results:</h3>
          <div className="search-results-gridN">
            {searchResults.map((campaign) => (
              <div key={campaign._id} className="campaign-cardN">
                <img src={campaign.imageUrl} alt={campaign.title} className="campaign-imageN" />
                <div className="campaign-infoN">
                  <h4>{campaign.title}</h4>
                  <p>{campaign.description}</p>
                  <button 
                    className="donate-buttonN" 
                    onClick={() => navigate(`/donation`)}
                  >
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchBar;