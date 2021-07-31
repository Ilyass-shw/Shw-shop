import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  Select,
  Country,
  Optgroup,
  FormError,
} from './CountrySelect.component';

const CountrySelect: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Select
        {...register('Country', { required: 'This is required.' })}
        isError={errors.Country}
        placeholder="Counrty/Region"
        autoComplete="address-level2"
        defaultValue=''
        id="country"
      >
        <Country value="" label="Select a country ... " disabled>
          Select a country ...
        </Country>
        <Optgroup id="country-optgroup-Africa" label="Africa">
          <Country value="DZ" label="Algeria">
            Algeria
          </Country>
          <Country value="AO" label="Angola">
            Angola
          </Country>
          <Country value="BJ" label="Benin">
            Benin
          </Country>
          <Country value="BW" label="Botswana">
            Botswana
          </Country>
          <Country value="BF" label="Burkina Faso">
            Burkina Faso
          </Country>
          <Country value="BI" label="Burundi">
            Burundi
          </Country>
          <Country value="CM" label="Cameroon">
            Cameroon
          </Country>
          <Country value="CV" label="Cape Verde">
            Cape Verde
          </Country>
          <Country value="CF" label="Central African Republic">
            Central African Republic
          </Country>
          <Country value="TD" label="Chad">
            Chad
          </Country>
          <Country value="KM" label="Comoros">
            Comoros
          </Country>
          <Country value="CG" label="Congo - Brazzaville">
            Congo - Brazzaville
          </Country>
          <Country value="CD" label="Congo - Kinshasa">
            Congo - Kinshasa
          </Country>
          <Country value="CI" label="Côte d’Ivoire">
            Côte d’Ivoire
          </Country>
          <Country value="DJ" label="Djibouti">
            Djibouti
          </Country>
          <Country value="EG" label="Egypt">
            Egypt
          </Country>
          <Country value="GQ" label="Equatorial Guinea">
            Equatorial Guinea
          </Country>
          <Country value="ER" label="Eritrea">
            Eritrea
          </Country>
          <Country value="ET" label="Ethiopia">
            Ethiopia
          </Country>
          <Country value="GA" label="Gabon">
            Gabon
          </Country>
          <Country value="GM" label="Gambia">
            Gambia
          </Country>
          <Country value="GH" label="Ghana">
            Ghana
          </Country>
          <Country value="GN" label="Guinea">
            Guinea
          </Country>
          <Country value="GW" label="Guinea-Bissau">
            Guinea-Bissau
          </Country>
          <Country value="KE" label="Kenya">
            Kenya
          </Country>
          <Country value="LS" label="Lesotho">
            Lesotho
          </Country>
          <Country value="LR" label="Liberia">
            Liberia
          </Country>
          <Country value="LY" label="Libya">
            Libya
          </Country>
          <Country value="MG" label="Madagascar">
            Madagascar
          </Country>
          <Country value="MW" label="Malawi">
            Malawi
          </Country>
          <Country value="ML" label="Mali">
            Mali
          </Country>
          <Country value="MR" label="Mauritania">
            Mauritania
          </Country>
          <Country value="MU" label="Mauritius">
            Mauritius
          </Country>
          <Country value="YT" label="Mayotte">
            Mayotte
          </Country>
          <Country value="MA" label="Morocco">
            Morocco
          </Country>
          <Country value="MZ" label="Mozambique">
            Mozambique
          </Country>
          <Country value="NA" label="Namibia">
            Namibia
          </Country>
          <Country value="NE" label="Niger">
            Niger
          </Country>
          <Country value="NG" label="Nigeria">
            Nigeria
          </Country>
          <Country value="RW" label="Rwanda">
            Rwanda
          </Country>
          <Country value="RE" label="Réunion">
            Réunion
          </Country>
          <Country value="SH" label="Saint Helena">
            Saint Helena
          </Country>
          <Country value="SN" label="Senegal">
            Senegal
          </Country>
          <Country value="SC" label="Seychelles">
            Seychelles
          </Country>
          <Country value="SL" label="Sierra Leone">
            Sierra Leone
          </Country>
          <Country value="SO" label="Somalia">
            Somalia
          </Country>
          <Country value="ZA" label="South Africa">
            South Africa
          </Country>
          <Country value="SD" label="Sudan">
            Sudan
          </Country>
          <Country value="SZ" label="Swaziland">
            Swaziland
          </Country>
          <Country value="ST" label="São Tomé and Príncipe">
            São Tomé and Príncipe
          </Country>
          <Country value="TZ" label="Tanzania">
            Tanzania
          </Country>
          <Country value="TG" label="Togo">
            Togo
          </Country>
          <Country value="TN" label="Tunisia">
            Tunisia
          </Country>
          <Country value="UG" label="Uganda">
            Uganda
          </Country>
          <Country value="EH" label="Western Sahara">
            Western Sahara
          </Country>
          <Country value="ZM" label="Zambia">
            Zambia
          </Country>
          <Country value="ZW" label="Zimbabwe">
            Zimbabwe
          </Country>
        </Optgroup>
        <Optgroup id="country-optgroup-Americas" label="Americas">
          <Country value="AI" label="Anguilla">
            Anguilla
          </Country>
          <Country value="AG" label="Antigua and Barbuda">
            Antigua and Barbuda
          </Country>
          <Country value="AR" label="Argentina">
            Argentina
          </Country>
          <Country value="AW" label="Aruba">
            Aruba
          </Country>
          <Country value="BS" label="Bahamas">
            Bahamas
          </Country>
          <Country value="BB" label="Barbados">
            Barbados
          </Country>
          <Country value="BZ" label="Belize">
            Belize
          </Country>
          <Country value="BM" label="Bermuda">
            Bermuda
          </Country>
          <Country value="BO" label="Bolivia">
            Bolivia
          </Country>
          <Country value="BR" label="Brazil">
            Brazil
          </Country>
          <Country value="VG" label="British Virgin Islands">
            British Virgin Islands
          </Country>
          <Country value="CA" label="Canada">
            Canada
          </Country>
          <Country value="KY" label="Cayman Islands">
            Cayman Islands
          </Country>
          <Country value="CL" label="Chile">
            Chile
          </Country>
          <Country value="CO" label="Colombia">
            Colombia
          </Country>
          <Country value="CR" label="Costa Rica">
            Costa Rica
          </Country>
          <Country value="CU" label="Cuba">
            Cuba
          </Country>
          <Country value="DM" label="Dominica">
            Dominica
          </Country>
          <Country value="DO" label="Dominican Republic">
            Dominican Republic
          </Country>
          <Country value="EC" label="Ecuador">
            Ecuador
          </Country>
          <Country value="SV" label="El Salvador">
            El Salvador
          </Country>
          <Country value="FK" label="Falkland Islands">
            Falkland Islands
          </Country>
          <Country value="GF" label="French Guiana">
            French Guiana
          </Country>
          <Country value="GL" label="Greenland">
            Greenland
          </Country>
          <Country value="GD" label="Grenada">
            Grenada
          </Country>
          <Country value="GP" label="Guadeloupe">
            Guadeloupe
          </Country>
          <Country value="GT" label="Guatemala">
            Guatemala
          </Country>
          <Country value="GY" label="Guyana">
            Guyana
          </Country>
          <Country value="HT" label="Haiti">
            Haiti
          </Country>
          <Country value="HN" label="Honduras">
            Honduras
          </Country>
          <Country value="JM" label="Jamaica">
            Jamaica
          </Country>
          <Country value="MQ" label="Martinique">
            Martinique
          </Country>
          <Country value="MX" label="Mexico">
            Mexico
          </Country>
          <Country value="MS" label="Montserrat">
            Montserrat
          </Country>
          <Country value="AN" label="Netherlands Antilles">
            Netherlands Antilles
          </Country>
          <Country value="NI" label="Nicaragua">
            Nicaragua
          </Country>
          <Country value="PA" label="Panama">
            Panama
          </Country>
          <Country value="PY" label="Paraguay">
            Paraguay
          </Country>
          <Country value="PE" label="Peru">
            Peru
          </Country>
          <Country value="PR" label="Puerto Rico">
            Puerto Rico
          </Country>
          <Country value="BL" label="Saint Barthélemy">
            Saint Barthélemy
          </Country>
          <Country value="KN" label="Saint Kitts and Nevis">
            Saint Kitts and Nevis
          </Country>
          <Country value="LC" label="Saint Lucia">
            Saint Lucia
          </Country>
          <Country value="MF" label="Saint Martin">
            Saint Martin
          </Country>
          <Country value="PM" label="Saint Pierre and Miquelon">
            Saint Pierre and Miquelon
          </Country>
          <Country value="VC" label="Saint Vincent and the Grenadines">
            Saint Vincent and the Grenadines
          </Country>
          <Country value="SR" label="Suriname">
            Suriname
          </Country>
          <Country value="TT" label="Trinidad and Tobago">
            Trinidad and Tobago
          </Country>
          <Country value="TC" label="Turks and Caicos Islands">
            Turks and Caicos Islands
          </Country>
          <Country value="VI" label="U.S. Virgin Islands">
            U.S. Virgin Islands
          </Country>
          <Country value="US" label="United States">
            United States
          </Country>
          <Country value="UY" label="Uruguay">
            Uruguay
          </Country>
          <Country value="VE" label="Venezuela">
            Venezuela
          </Country>
        </Optgroup>
        <Optgroup id="country-optgroup-Asia" label="Asia">
          <Country value="AF" label="Afghanistan">
            Afghanistan
          </Country>
          <Country value="AM" label="Armenia">
            Armenia
          </Country>
          <Country value="AZ" label="Azerbaijan">
            Azerbaijan
          </Country>
          <Country value="BH" label="Bahrain">
            Bahrain
          </Country>
          <Country value="BD" label="Bangladesh">
            Bangladesh
          </Country>
          <Country value="BT" label="Bhutan">
            Bhutan
          </Country>
          <Country value="BN" label="Brunei">
            Brunei
          </Country>
          <Country value="KH" label="Cambodia">
            Cambodia
          </Country>
          <Country value="CN" label="China">
            China
          </Country>
          <Country value="GE" label="Georgia">
            Georgia
          </Country>
          <Country value="HK" label="Hong Kong SAR China">
            Hong Kong SAR China
          </Country>
          <Country value="IN" label="India">
            India
          </Country>
          <Country value="ID" label="Indonesia">
            Indonesia
          </Country>
          <Country value="IR" label="Iran">
            Iran
          </Country>
          <Country value="IQ" label="Iraq">
            Iraq
          </Country>
          <Country value="IL" label="Israel">
            Israel
          </Country>
          <Country value="JP" label="Japan">
            Japan
          </Country>
          <Country value="JO" label="Jordan">
            Jordan
          </Country>
          <Country value="KZ" label="Kazakhstan">
            Kazakhstan
          </Country>
          <Country value="KW" label="Kuwait">
            Kuwait
          </Country>
          <Country value="KG" label="Kyrgyzstan">
            Kyrgyzstan
          </Country>
          <Country value="LA" label="Laos">
            Laos
          </Country>
          <Country value="LB" label="Lebanon">
            Lebanon
          </Country>
          <Country value="MO" label="Macau SAR China">
            Macau SAR China
          </Country>
          <Country value="MY" label="Malaysia">
            Malaysia
          </Country>
          <Country value="MV" label="Maldives">
            Maldives
          </Country>
          <Country value="MN" label="Mongolia">
            Mongolia
          </Country>
          <Country value="MM" label="Myanmar [Burma]">
            Myanmar [Burma]
          </Country>
          <Country value="NP" label="Nepal">
            Nepal
          </Country>
          <Country value="NT" label="Neutral Zone">
            Neutral Zone
          </Country>
          <Country value="KP" label="North Korea">
            North Korea
          </Country>
          <Country value="OM" label="Oman">
            Oman
          </Country>
          <Country value="PK" label="Pakistan">
            Pakistan
          </Country>
          <Country value="PS" label="Palestinian Territories">
            Palestinian Territories
          </Country>
          <Country value="YD" label="People's Democratic Republic of Yemen">
            People&apos;s Democratic Republic of Yemen
          </Country>
          <Country value="PH" label="Philippines">
            Philippines
          </Country>
          <Country value="QA" label="Qatar">
            Qatar
          </Country>
          <Country value="SA" label="Saudi Arabia">
            Saudi Arabia
          </Country>
          <Country value="SG" label="Singapore">
            Singapore
          </Country>
          <Country value="KR" label="South Korea">
            South Korea
          </Country>
          <Country value="LK" label="Sri Lanka">
            Sri Lanka
          </Country>
          <Country value="SY" label="Syria">
            Syria
          </Country>
          <Country value="TW" label="Taiwan">
            Taiwan
          </Country>
          <Country value="TJ" label="Tajikistan">
            Tajikistan
          </Country>
          <Country value="TH" label="Thailand">
            Thailand
          </Country>
          <Country value="TL" label="Timor-Leste">
            Timor-Leste
          </Country>
          <Country value="TR" label="Turkey">
            Turkey
          </Country>
          <Country value="TM" label="Turkmenistan">
            Turkmenistan
          </Country>
          <Country value="AE" label="United Arab Emirates">
            United Arab Emirates
          </Country>
          <Country value="UZ" label="Uzbekistan">
            Uzbekistan
          </Country>
          <Country value="VN" label="Vietnam">
            Vietnam
          </Country>
          <Country value="YE" label="Yemen">
            Yemen
          </Country>
        </Optgroup>
        <Optgroup id="country-optgroup-Europe" label="Europe">
          <Country value="AL" label="Albania">
            Albania
          </Country>
          <Country value="AD" label="Andorra">
            Andorra
          </Country>
          <Country value="AT" label="Austria">
            Austria
          </Country>
          <Country value="BY" label="Belarus">
            Belarus
          </Country>
          <Country value="BE" label="Belgium">
            Belgium
          </Country>
          <Country value="BA" label="Bosnia and Herzegovina">
            Bosnia and Herzegovina
          </Country>
          <Country value="BG" label="Bulgaria">
            Bulgaria
          </Country>
          <Country value="HR" label="Croatia">
            Croatia
          </Country>
          <Country value="CY" label="Cyprus">
            Cyprus
          </Country>
          <Country value="CZ" label="Czech Republic">
            Czech Republic
          </Country>
          <Country value="DK" label="Denmark">
            Denmark
          </Country>
          <Country value="DD" label="East Germany">
            East Germany
          </Country>
          <Country value="EE" label="Estonia">
            Estonia
          </Country>
          <Country value="FO" label="Faroe Islands">
            Faroe Islands
          </Country>
          <Country value="FI" label="Finland">
            Finland
          </Country>
          <Country value="FR" label="France">
            France
          </Country>
          <Country value="DE" label="Germany">
            Germany
          </Country>
          <Country value="GI" label="Gibraltar">
            Gibraltar
          </Country>
          <Country value="GR" label="Greece">
            Greece
          </Country>
          <Country value="GG" label="Guernsey">
            Guernsey
          </Country>
          <Country value="HU" label="Hungary">
            Hungary
          </Country>
          <Country value="IS" label="Iceland">
            Iceland
          </Country>
          <Country value="IE" label="Ireland">
            Ireland
          </Country>
          <Country value="IM" label="Isle of Man">
            Isle of Man
          </Country>
          <Country value="IT" label="Italy">
            Italy
          </Country>
          <Country value="JE" label="Jersey">
            Jersey
          </Country>
          <Country value="LV" label="Latvia">
            Latvia
          </Country>
          <Country value="LI" label="Liechtenstein">
            Liechtenstein
          </Country>
          <Country value="LT" label="Lithuania">
            Lithuania
          </Country>
          <Country value="LU" label="Luxembourg">
            Luxembourg
          </Country>
          <Country value="MK" label="Macedonia">
            Macedonia
          </Country>
          <Country value="MT" label="Malta">
            Malta
          </Country>
          <Country value="FX" label="Metropolitan France">
            Metropolitan France
          </Country>
          <Country value="MD" label="Moldova">
            Moldova
          </Country>
          <Country value="MC" label="Monaco">
            Monaco
          </Country>
          <Country value="ME" label="Montenegro">
            Montenegro
          </Country>
          <Country value="NL" label="Netherlands">
            Netherlands
          </Country>
          <Country value="NO" label="Norway">
            Norway
          </Country>
          <Country value="PL" label="Poland">
            Poland
          </Country>
          <Country value="PT" label="Portugal">
            Portugal
          </Country>
          <Country value="RO" label="Romania">
            Romania
          </Country>
          <Country value="RU" label="Russia">
            Russia
          </Country>
          <Country value="SM" label="San Marino">
            San Marino
          </Country>
          <Country value="RS" label="Serbia">
            Serbia
          </Country>
          <Country value="CS" label="Serbia and Montenegro">
            Serbia and Montenegro
          </Country>
          <Country value="SK" label="Slovakia">
            Slovakia
          </Country>
          <Country value="SI" label="Slovenia">
            Slovenia
          </Country>
          <Country value="ES" label="Spain">
            Spain
          </Country>
          <Country value="SJ" label="Svalbard and Jan Mayen">
            Svalbard and Jan Mayen
          </Country>
          <Country value="SE" label="Sweden">
            Sweden
          </Country>
          <Country value="CH" label="Switzerland">
            Switzerland
          </Country>
          <Country value="UA" label="Ukraine">
            Ukraine
          </Country>
          <Country value="SU" label="Union of Soviet Socialist Republics">
            Union of Soviet Socialist Republics
          </Country>
          <Country value="GB" label="United Kingdom">
            United Kingdom
          </Country>
          <Country value="VA" label="Vatican City">
            Vatican City
          </Country>
          <Country value="AX" label="Åland Islands">
            Åland Islands
          </Country>
        </Optgroup>
        <Optgroup id="country-optgroup-Oceania" label="Oceania">
          <Country value="AS" label="American Samoa">
            American Samoa
          </Country>
          <Country value="AQ" label="Antarctica">
            Antarctica
          </Country>
          <Country value="AU" label="Australia">
            Australia
          </Country>
          <Country value="BV" label="Bouvet Island">
            Bouvet Island
          </Country>
          <Country value="IO" label="British Indian Ocean Territory">
            British Indian Ocean Territory
          </Country>
          <Country value="CX" label="Christmas Island">
            Christmas Island
          </Country>
          <Country value="CC" label="Cocos [Keeling] Islands">
            Cocos [Keeling] Islands
          </Country>
          <Country value="CK" label="Cook Islands">
            Cook Islands
          </Country>
          <Country value="FJ" label="Fiji">
            Fiji
          </Country>
          <Country value="PF" label="French Polynesia">
            French Polynesia
          </Country>
          <Country value="TF" label="French Southern Territories">
            French Southern Territories
          </Country>
          <Country value="GU" label="Guam">
            Guam
          </Country>
          <Country value="HM" label="Heard Island and McDonald Islands">
            Heard Island and McDonald Islands
          </Country>
          <Country value="KI" label="Kiribati">
            Kiribati
          </Country>
          <Country value="MH" label="Marshall Islands">
            Marshall Islands
          </Country>
          <Country value="FM" label="Micronesia">
            Micronesia
          </Country>
          <Country value="NR" label="Nauru">
            Nauru
          </Country>
          <Country value="NC" label="New Caledonia">
            New Caledonia
          </Country>
          <Country value="NZ" label="New Zealand">
            New Zealand
          </Country>
          <Country value="NU" label="Niue">
            Niue
          </Country>
          <Country value="NF" label="Norfolk Island">
            Norfolk Island
          </Country>
          <Country value="MP" label="Northern Mariana Islands">
            Northern Mariana Islands
          </Country>
          <Country value="PW" label="Palau">
            Palau
          </Country>
          <Country value="PG" label="Papua New Guinea">
            Papua New Guinea
          </Country>
          <Country value="PN" label="Pitcairn Islands">
            Pitcairn Islands
          </Country>
          <Country value="WS" label="Samoa">
            Samoa
          </Country>
          <Country value="SB" label="Solomon Islands">
            Solomon Islands
          </Country>
          <Country
            value="GS"
            label="South Georgia and the South Sandwich Islands"
          >
            South Georgia and the South Sandwich Islands
          </Country>
          <Country value="TK" label="Tokelau">
            Tokelau
          </Country>
          <Country value="TO" label="Tonga">
            Tonga
          </Country>
          <Country value="TV" label="Tuvalu">
            Tuvalu
          </Country>
          <Country value="UM" label="U.S. Minor Outlying Islands">
            U.S. Minor Outlying Islands
          </Country>
          <Country value="VU" label="Vanuatu">
            Vanuatu
          </Country>
          <Country value="WF" label="Wallis and Futuna">
            Wallis and Futuna
          </Country>
        </Optgroup>
      </Select>
      <FormError>{errors.Country && errors.Country.message}</FormError>
    </>
  );
};

export default CountrySelect;
