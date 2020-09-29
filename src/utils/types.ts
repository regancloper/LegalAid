export interface StripeProducts {
	oneTimeAmounts: {
		edges: {
			node: StripeNode;
		}[];
	};
	monthlyAmounts: {
		edges: {
			node: StripeNode;
		}[];
	};
	oneTimeFlexible: StripeNode;
}

export interface StripeNode {
	id: number;
	active: string;
	currency: string;
	unit_amount: number;
	product: {
		id: number;
		name: string;
		statement_descriptor: string;
	};
}

export interface NewsDataObject {
	id: string;
	__typename: string;
	title: string;
	publishedDate: string;
	externalUrl?: string;
}

export interface NewsData {
	legalNews: {
		nodes: NewsDataObject[];
	};
	publications: {
		nodes: NewsDataObject[];
	};
}
