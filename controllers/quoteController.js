const Quote = require('../models/quote');

exports.getRandom = (req, res) => {
	Quote.count().exec((err, count) => {
		const randomEntry = Math.floor(Math.random() * count);
		Quote.findOne()
			.skip(randomEntry)
			.exec((err, randomQuote) => {
				if (err) {
					res.status(500).send();
				}
				res.json({ randomQuote });
			});
	});
};

exports.createQuote = async (req, res) => {
	try {
		console.log(req.body);
		const quote = new Quote({
			content: req.body.content,
		});
		await quote.save();
		res.status(201).json({ quote });
	} catch (e) {
		res.status(500).json({
			message: 'something went wrong',
			e,
		});
	}
};

exports.getQuotes = async (req, res) => {
	try {
		const quotes = await Quote.find({});
		res.json({ quotes });
	} catch (e) {
		res.json({
			message: 'something went wrong',
			e,
		});
	}
};

exports.getQuote = async (req, res) => {
	try {
		const quote = await Quote.findById(req.params.id);
		if (!quote) {
			res.status(404).send();
		}
		res.json({ quote });
	} catch (e) {
		res.status(500).json({
			message: 'something went wrong',
			e,
		});
	}
};

exports.updateQuote = async (req, res) => {
	try {
		const quote = await Quote.findOneAndUpdate(
			{ _id: req.params.id },
			{
				content: req.body.content,
			},
			{ new: true }
		);

		if (!quote) {
			res.status(404).send();
		}

		res.json({ quote });
	} catch (e) {
		res.status(400).json({
			message: 'something went wrong',
			e,
		});
	}
};

exports.deleteQuote = async (req, res) => {
	try {
		const deletedQuote = await Quote.findOneAndDelete({ _id: req.params.id });
		if (!quote) {
			res.status(404).send();
		}
		res.json({ message: 'deleted successfully!' });
	} catch (e) {
		res.status(500).json({
			message: 'something went wrong',
			e,
		});
	}
};
