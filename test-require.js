try {
    require('./controllers/transactionController');
    console.log('✅ Controller found!');
  } catch (e) {
    console.error('❌ Error:', e.message);
  }