import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import paymentStyles from '../app/styles/paymentStyles';
const sampleItems = [
  {
    id: '1',
    image: require('../../assets/images/products/1.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    quantity: 1,
    price: 17.00,
  },
  {
    id: '2',
    image: require('../../assets/images/products/2.png'),
    description: 'Lorem ipsum dolor sit amet consectetur.',
    quantity: 1,
    price: 17.00,
  }
];

const PaymentPage: React.FC = () => {
  const [shippingOption, setShippingOption] = useState<'standard' | 'express'>('standard');
  const router = useRouter();
  const totalPrice = sampleItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + (shippingOption === 'express' ? 12 : 0);

  return (
    <View style={paymentStyles.pageContainer}>
      <ScrollView>
        <Text style={paymentStyles.title}>Payment</Text>

        {/* Shipping Address */}
        <View style={paymentStyles.section}>
          <View style={paymentStyles.sectionHeader}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                      <Ionicons name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
            <Text style={paymentStyles.sectionTitle}>Shipping Address</Text>
            <TouchableOpacity style={paymentStyles.editButton}>
              <Ionicons name="pencil" size={20} color="#0066FF" />
            </TouchableOpacity>
          </View>
          <View style={paymentStyles.infoBox}>
            <Text style={paymentStyles.infoText}>
              26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city
            </Text>
          </View>
        </View>

        {/* Contact Information */}
        <View style={paymentStyles.section}>
          <View style={paymentStyles.sectionHeader}>
            <Text style={paymentStyles.sectionTitle}>Contact Information</Text>
            <TouchableOpacity style={paymentStyles.editButton}>
              <Ionicons name="pencil" size={20} color="#0066FF" />
            </TouchableOpacity>
          </View>
          <View style={paymentStyles.infoBox}>
            <Text style={paymentStyles.infoText}>+84932000000</Text>
            <Text style={paymentStyles.infoText}>amandamorgan@example.com</Text>
          </View>
        </View>

        {/* Items */}
        <View style={paymentStyles.section}>
          <View style={paymentStyles.sectionHeader}>
            <Text style={paymentStyles.sectionTitle}>Items</Text>
            <View style={paymentStyles.itemCountBadge}>
              <Text style={paymentStyles.itemCountText}>{sampleItems.length}</Text>
            </View>
            <TouchableOpacity style={paymentStyles.addVoucherButton}>
              <Text style={paymentStyles.addVoucherText}>Add Voucher</Text>
            </TouchableOpacity>
          </View>
          {sampleItems.map(item => (
            <View key={item.id} style={paymentStyles.itemRow}>
              <View style={paymentStyles.itemImageWrapper}>
                <Image source={item.image} style={paymentStyles.itemImage} />
                <View style={paymentStyles.itemQuantityBadge}>
                  <Text style={paymentStyles.itemQuantityText}>{item.quantity}</Text>
                </View>
              </View>
              <Text style={paymentStyles.itemDescription}>{item.description}</Text>
              <Text style={paymentStyles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
          ))}
        </View>

        {/* Shipping Options */}
        <View style={paymentStyles.section}>
          <Text style={paymentStyles.sectionTitle}>Shipping Options</Text>
          <TouchableOpacity
            style={[
              paymentStyles.shippingOption,
              shippingOption === 'standard' && paymentStyles.shippingOptionSelected
            ]}
            onPress={() => setShippingOption('standard')}
          >
            <View style={paymentStyles.radioCircle}>
              {shippingOption === 'standard' && <View style={paymentStyles.selectedRb} />}
            </View>
            <Text style={paymentStyles.shippingOptionText}>Standard</Text>
            <Text style={paymentStyles.shippingOptionDuration}>5-7 days</Text>
            <Text style={paymentStyles.shippingOptionPrice}>FREE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              paymentStyles.shippingOption,
              shippingOption === 'express' && paymentStyles.shippingOptionSelected
            ]}
            onPress={() => setShippingOption('express')}
          >
            <View style={paymentStyles.radioCircle}>
              {shippingOption === 'express' && <View style={paymentStyles.selectedRb} />}
            </View>
            <Text style={paymentStyles.shippingOptionText}>Express</Text>
            <Text style={paymentStyles.shippingOptionDuration}>1-2 days</Text>
            <Text style={paymentStyles.shippingOptionPrice}>$12.00</Text>
          </TouchableOpacity>
          <Text style={paymentStyles.shippingNote}>
            Delivered on or before Thursday, 23 April 2020
          </Text>
        </View>

        {/* Payment Method */}
        <View style={paymentStyles.section}>
          <View style={paymentStyles.sectionHeader}>
            <Text style={paymentStyles.sectionTitle}>Payment Method</Text>
            <TouchableOpacity style={paymentStyles.editButton}>
              <Ionicons name="pencil" size={20} color="#0066FF" />
            </TouchableOpacity>
          </View>
          <View style={paymentStyles.paymentMethodBadge}>
            <Text style={paymentStyles.paymentMethodText}>Card</Text>
          </View>
        </View>

        {/* Total and Pay Button */}
        <View style={paymentStyles.totalContainer}>
          <Text style={paymentStyles.totalText}>Total ${totalPrice.toFixed(2)}</Text>
          <TouchableOpacity style={paymentStyles.payButton}>
            <Text style={paymentStyles.payButtonText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create(paymentStyles);
export default PaymentPage;
