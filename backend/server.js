
import { mongoose } from 'mongoose'; 
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
 
const port =  5000; 

mongoose.connect("mongodb+srv://gm7274697:Gourav456@basicportfoliodatauser.ut1rxxr.mongodb.net/UserData?retryWrites=true&w=majority&appName=BasicPortfolioDataUser")
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error(err));

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  
  },
  message: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', ContactSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create (POST) route to save contact information
app.post('/api/contacts', async (req, res) => {
  try {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving contact' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
