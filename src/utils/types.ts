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
	};
}
