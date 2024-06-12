import { useState } from 'react';

function FreePackages() {
    
    const [inputText, setInputText] = useState('');
    const [selectedCryptos, setSelectedCryptos] = useState([]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleCryptoChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedCryptos(selectedOptions);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <h1>PayCoin Free Package</h1>
            <form>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>Text Input</label>
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                        style={{ padding: '10px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>Select Cryptocurrency</label>
                    <select
                        multiple
                        value={selectedCryptos}
                        onChange={handleCryptoChange}
                        style={{ padding: '10px', width: '100%' }}
                    >
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Ethereum">Ethereum</option>
                        <option value="Ripple">Ripple</option>
                        <option value="Litecoin">Litecoin</option>
                        <option value="Bitcoin Cash">Bitcoin Cash</option>
                        <option value="Cardano">Cardano</option>
                        <option value="Stellar">Stellar</option>
                        <option value="Dogecoin">Dogecoin</option>
                        <option value="Chainlink">Chainlink</option>
                        <option value="Polkadot">Polkadot</option>
                    </select>
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0073aa', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px' }}>
                    Save Changes
                </button>
                <button type="button" style={{ padding: '10px 20px', backgroundColor: '#6a1b9a', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Upgrade to Premium
                </button>
            </form>
        </div>
    );
}

export default FreePackages;
