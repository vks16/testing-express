const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const members = require('../../database');

// Get all members
router.get("/", (req, res) => res.json(members));

// Get a single member
router.get("/:id", (req, res) => {
	// res.send(req.params.id);
	const found = members.some(({id}) => id === parseInt(req.params.id))
	if (found) {
		res.json(members.filter(({id}) => id === parseInt(req.params.id)));
	}else {
		res.status(400).json({ error: `No member with the id of ${req.params.id}`});
	}
})

// Create Member
router.post('/', (req, res) => {
    // res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
      return res.status(400).json({error: "Please include a name and email."})
    }

    members.push(newMember);
    res.json(members);
})

// Update Member
router.put("/:id", (req, res) => {
	// res.send(req.params.id);
	const found = members.some(({id}) => id === parseInt(req.params.id))
	if (found) {
        const updMember = req.body;
        members.forEach((member) => {
            if (member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                return res.json({ msg: 'Member update', member})
            }
        })
        
	}else {
		res.status(400).json({ error: `No member with the id of ${req.params.id}`});
	}
})


// Delete Member
router.delete("/:id", (req, res) => {
	// res.send(req.params.id);
	const found = members.some(({id}) => id === parseInt(req.params.id))
	if (found) {
       res.json({msg: 'Member deleted', members: members.filter(m => m.id !== parseInt(req.params.id))})
        
	}else {
		res.status(400).json({ error: `No member with the id of ${req.params.id}`});
	}
})

module.exports = router;
