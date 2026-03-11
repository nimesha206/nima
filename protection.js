const SecureConfig = require('./config');

const ProtectionHandler = {
	interceptPropertyAccess: (target, property) => {
		if (['s1','s2','s3','s4','s5','s6','s7','s8'].includes(property)) {
			throw new Error('Access Denied');
		}
		return true;
	},
	
	preventModification: () => {
		const protectedKeys = ['owner', 'ownerName', 'author', 'botname', 'packname', 'APIKeys', 'geminiApiKey', 'my'];
		
		protectedKeys.forEach(key => {
			Object.defineProperty(global, key, {
				writable: false,
				configurable: false,
				enumerable: true
			});
		});
	},
	
	verifySecurity: () => {
		try {
			const test1 = SecureConfig.ownerNumber;
			const test2 = SecureConfig.ownerName;
			const test3 = SecureConfig.botName;
			const test4 = SecureConfig.apiKey;
			const test5 = SecureConfig.geminiApiKey;
			
			if (!test1 || !test2 || !test3 || !test4 || !test5) {
				throw new Error('Security Verification Failed');
			}
			
			return true;
		} catch (error) {
			console.error('Security Check Failed:', error.message);
			process.exit(1);
		}
	}
};

ProtectionHandler.verifySecurity();
ProtectionHandler.preventModification();

module.exports = ProtectionHandler;
